import { interviewService } from './interview.service'
import { replicantService } from './replicant.service'
import t from './trcpInstance'

export const appRouter = t.router({
  replicant: t.router(replicantService),
  interview: t.router(interviewService),
})

export type AppRouter = typeof appRouter;