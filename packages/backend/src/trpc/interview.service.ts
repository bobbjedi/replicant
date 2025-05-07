import prismaDb from '../prisma/prismaDb'
import { z } from 'zod'
import t from './trcpInstance'
import { generateNextQuestionByQuestionsListFromChat, generateFirstQuestionOfNewTopicFromChat } from '../ai/replicantEngine'
import { EDefaultTopicType } from '../../../shared/src/types'

const getInterviewTopicsWithQuestions = t.procedure
  .input(z.object({ repId: z.number() }))
  .query(async ({ input }) => {

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

const crateInterviewQuestion = t.procedure
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

const generateNextQuestionText = t.procedure
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

    const greetingTopicName = topics.find((t) => t.type === EDefaultTopicType.GREETING)?.name

    // always use greeting topic for generate next questions
    const greetingQuestions = topics.find((t) => t.name === greetingTopicName)?.questions || []

    const currentTopicQuestions = topics.find((t) => t.name === topicName)?.questions || []

    const newQuestionText = await generateNextQuestionByQuestionsListFromChat({
      greetingQuestions: greetingTopicName === topicName ? [] : greetingQuestions,
      currentTopicQuestions,
      topicName,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })

const generateFirstQuestionTextForTopic = t.procedure
  .input(z.object({
    repId: z.number(),
    topicName: z.string(),
    lang: z.enum(['RU', 'EN']),
  }))
  .query(async ({ input }) => {
    const { repId, topicName, lang } = input

    // первый топик Приветствие
    const greetingTopic = await prismaDb.interviewTopic.findFirst({
      where: {
        interview: { replicantId: repId },
        type: EDefaultTopicType.GREETING,
      },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    // always use greeting topic for generate next questions
    const greetingQuestions = greetingTopic?.questions || []

    const newQuestionText = await generateFirstQuestionOfNewTopicFromChat({
      greetingQuestions,
      topicName,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })

export const interviewService = {
  // getInterviewByRepId,
  getAllTopics: getInterviewTopicsWithQuestions,
  createQuestion: crateInterviewQuestion,
  generateQuestionText: generateNextQuestionText,
  generateFirstQuestionTextForTopic,
}