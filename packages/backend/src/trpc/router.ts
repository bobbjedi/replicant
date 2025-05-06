import { generateFirstQuestionOfTopic, crateInterviewQuestion, generateNextQuestionText, getInterviewTopicsWithQuestions } from './interview.service'
import { createReplicant, getReplicantsList } from './replicant.service'
import t from './trcpInstance'

export const appRouter = t.router({
  // Replicant
  getReplicantsList,
  createReplicant,

  // Interview
  getInterviewTopicsWithQuestions,
  crateInterviewQuestion,
  generateNextQuestionText,
  generateFirstQuestionOfTopic,
})

export type AppRouter = typeof appRouter;