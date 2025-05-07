import prismaDb, { InterviewModel } from '../prisma/prismaDb'
import { z } from 'zod'
import t from './trcpInstance'
import { generateNextQuestionByQuestionsListFromChat, generateFirstQuestionOfNewTopicFromChat } from '../ai/replicantEngine'

export const getInterviewByRepId = async (repId: number): Promise<InterviewModel | null> => {
  return prismaDb.interview.findFirst({
    where: {
      replicantId: repId,
    },
    include: {
      topics: {
        include: {
          questions: {
            orderBy: { createdAt: 'asc' },
          },
        },
      },
    },
  })
}

export const getInterviewTopicsWithQuestions = t.procedure
  .input(z.object({ repId: z.number() }))
  .query(async ({ input }) => {

    // Группируем вопросы по topic
    // const topicsMap: Record<string, QuestionModel[]> = {}

    // interview.questions.forEach((q: QuestionModel) => {
    //   topicsMap[q.topic] ||= []
    //   const list = topicsMap[q.topic] as QuestionModel[]
    //   list.push({ ...q })
    // })

    // // Формируем массив тем с вопросами
    // const result = Object.entries(topicsMap).map(([topic, questions]) => {
    //   return {
    //     topic,
    //     updatedAt: questions[0]?.createdAt,
    //     questions,
    //   }
    // }).sort((t1, t2) => Number(t2.updatedAt) - Number(t1.updatedAt))

    return await prismaDb.interviewTopic.findMany({
      where: { interview: { replicantId: input.repId } },
      include: {
        questions: {
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: { updatedAt: 'desc' },
    })
  })

export const crateInterviewQuestion = t.procedure
  .input(z.object({
    repId: z.number(),
    emotion: z.string(),
    topicName: z.string(),
    questionText: z.string(),
    answerText: z.string(),
  }))
  .mutation(async ({ input }) => {

    const { emotion, topicName, questionText, answerText } = input

    let topic = await prismaDb.interviewTopic.findFirst({
      where: {
        name: topicName,
        interview: {
          replicantId: input.repId,
        },
      },
    })

    if (!topic) {
      topic = await prismaDb.interviewTopic.create({
        data: {
          name: topicName,
          summary: '',
          interview: {
            connect: {
              id: input.repId,
            },
          },
        },
      })
    }

    await prismaDb.interviewTopic.update({
      where: {
        id: topic.id,
      },
      data: {
        updatedAt: new Date(),
      },
    })

    return prismaDb.question.create({
      data: {
        topicId: topic.id,
        emotion: emotion || 'unknown',
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

    const topics = await prismaDb.interviewTopic.findMany({
      where: {
        interview: { replicantId: repId },
      },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    const greetingTopicName = topics[0]?.name as string

    // always use greeting topic for generate next questions
    const greetingQuestions = topics.find((t) => t.name === greetingTopicName)?.questions || []

    const currentTopicQuestions = topics.find((t) => t.name === topicName)?.questions || []

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

    // первый топик Приветствие
    const topic = await prismaDb.interviewTopic.findFirst({
      where: {
        interview: { replicantId: repId },
      },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    // always use greeting topic for generate next questions
    const greetingQuestions = topic?.questions || []

    const newQuestionText = await generateFirstQuestionOfNewTopicFromChat({
      greetingQuestions,
      topicName,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })