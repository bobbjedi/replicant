import prismaDb, { InterviewModel } from '../prisma/prismaDb'
import { z } from 'zod'
import t from './trcpInstance'
import { QuestionModel } from '../../../shared/src/types'

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
    const result = Object.entries(topicsMap).map(([topic, questions]) => ({
      topic,
      questions,
    }))

    return result
  })