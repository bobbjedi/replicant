import prismaDb, { InterviewModel } from '../prisma/prismaDb'
import { z } from 'zod'
import t from './trcpInstance'
import { QuestionModel } from '../../../shared/src/types'
import { generateNextQuestionByQuestionsListFromChat, generateFirstQuestionOfNewTopicFromChat } from '../ai/replicantEngine'

export const getInterviewByRepId = async (repId: number): Promise<InterviewModel | null> => {
  return prismaDb.interview.findFirst({
    where: {
      replicantId: repId,
    },
    include: {
      questions: true,
    },
  })
}

export const getInterviewTopicsWithQuestions = t.procedure
  .input(z.object({ repId: z.number() }))
  .query(async ({ input }) => {
    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: input.repId },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!interview) {
      throw new Error('Interview not found')
    }

    // Группируем вопросы по topic
    const topicsMap: Record<string, QuestionModel[]> = {}

    interview.questions.forEach((q: QuestionModel) => {
      topicsMap[q.topic] ||= []
      const list = topicsMap[q.topic] as QuestionModel[]
      list.push({ ...q })
    })

    // Формируем массив тем с вопросами
    const result = Object.entries(topicsMap).map(([topic, questions]) => {
      return {
        topic,
        updatedAt: questions[0]?.createdAt,
        questions,
      }
    }).sort((t1, t2) => Number(t2.updatedAt) - Number(t1.updatedAt))

    return result
  })

export const crateInterviewQuestion = t.procedure
  .input(z.object({
    repId: z.number(),
    emotion: z.string(),
    topic: z.string(),
    questionText: z.string(),
    answerText: z.string(),
  }))
  .mutation(async ({ input }) => {
    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: input.repId },
    })

    if (!interview) {

      throw new Error('Interview not found')
    }
    const { emotion, topic, questionText, answerText } = input
    return prismaDb.question.create({
      data: {
        interviewId: interview.id,
        emotion: emotion || 'unknown',
        topic: topic,
        questionText,
        answerText: answerText.replace(/  /g, ' '),
      },
    })
  })

export const generateNextQuestionText = t.procedure
  .input(z.object({
    repId: z.number(),
    topicName: z.string(),
    lang: z.enum(['RU', 'EN']),
  }))
  .query(async ({ input }) => {
    const { repId, topicName, lang } = input

    console.log('generateNextQuestionText', input)
    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: repId },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    const greetingTopicName = interview?.questions[0]?.topic as string

    // always use greeting topic for generate next questions
    const greetingQuestions = await prismaDb.question.findMany({
      where: {
        topic: greetingTopicName,
        interviewId: interview?.id as number,
      },
    })

    const currentTopicQuestions = await prismaDb.question.findMany({
      where: {
        topic: topicName,
        interviewId: interview?.id as number,
      },
    })

    const newQuestionText = await generateNextQuestionByQuestionsListFromChat({
      greetingQuestions: greetingTopicName === topicName ? [] : greetingQuestions,
      currentTopicQuestions,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })

export const generateFirstQuestionOfTopic = t.procedure
  .input(z.object({
    repId: z.number(),
    topicName: z.string(),
    lang: z.enum(['RU', 'EN']),
  }))
  .query(async ({ input }) => {
    const { repId, topicName, lang } = input

    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: repId },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    const greetingTopicName = interview?.questions[0]?.topic as string

    // always use greeting topic for generate next questions
    const greetingQuestions = await prismaDb.question.findMany({
      where: {
        topic: greetingTopicName,
        interviewId: interview?.id as number,
      },
    })

    const newQuestionText = await generateFirstQuestionOfNewTopicFromChat({
      greetingQuestions,
      topicName,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })