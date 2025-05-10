import prismaDb from '../prisma/prismaDb'
import { z } from 'zod'
import t from './trcpInstance'
import { generateNextQuestionByQuestionsListFromChat, generateFirstQuestionOfNewTopicFromChat } from '../ai/interview/interviewer'
import { EMainTopicType, TopicModel } from '../../../shared/src/types'
import deepRefreshInterviewSnapshotTask, { refreshInterviewSnapshotByTopicsSummaries } from '../workers/refreshSnapshot.task'
import { DEFAULT_TOPICS_META } from '../../../shared/src/constants'

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
      const topicType = DEFAULT_TOPICS_META.find(m => {
        return m.EN === topicName || m.RU === topicName
      })?.type || null

      topic = await prismaDb.interviewTopic.create({
        data: {
          name: topicName,
          summary: '',
          type: topicType,
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

    console.log('generateNextQuestionText input:', input)

    const topics = await prismaDb.interviewTopic.findMany({
      where: {
        interview: { replicantId: repId },
      },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    }) as TopicModel[]

    const greetingTopicName = topics.find((t) => t.type === EMainTopicType.GREETING)?.name

    // always use greeting topic for generate next questions
    const greetingTopic = topics.find((t) => t.name === greetingTopicName) as TopicModel

    const currentTopic = topics.find((t) => t.name === topicName) as TopicModel

    const newQuestionText = await generateNextQuestionByQuestionsListFromChat({
      greetingTopic: greetingTopicName === topicName ? null : greetingTopic,
      currentTopic,
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
        type: EMainTopicType.GREETING,
      },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    }) as TopicModel

    const newQuestionText = await generateFirstQuestionOfNewTopicFromChat({
      greetingTopic,
      topicName,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })

// Topics snapshots + interview snapshots
const deepRefreshInterviewSnapshot = t.procedure
  .input(z.object({ repId: z.number() }))
  .mutation(async ({ input }) => {
    console.log('USE deepRefreshInterviewSnapshot')
    const { repId } = input

    const res = await deepRefreshInterviewSnapshotTask(repId)
    return res
  })

export const refreshInterviewSnapshot = t.procedure
  .input(z.object({ repId: z.number() }))
  .mutation(async ({ input }) => {
    console.log('USE refreshInterviewSnapshot')
    const { repId } = input

    const res = await refreshInterviewSnapshotByTopicsSummaries(repId)

    console.log('refreshInterviewSnapshot:', res)
    return res
  })

export const interviewService = {
  getAllTopics: getInterviewTopicsWithQuestions,
  createQuestion: crateInterviewQuestion,
  deepRefreshInterviewSnapshot,
  refreshInterviewSnapshot,
  generateQuestionText: generateNextQuestionText,
  generateFirstQuestionTextForTopic,
}