import { getInterviewTopicsWithQuestions } from './interview.service'
import { createReplicant, getReplicantsList } from './replicant.service'
import t from './trcpInstance'

export const appRouter = t.router({
  getReplicantsList,
  createReplicant,
  getInterviewTopicsWithQuestions,
})

export type AppRouter = typeof appRouter;