import { chatService } from './chat.service';
import { infoService } from './info.service';
import { interviewService } from './interview.service'
import { replicantService } from './replicant.service'
import t from './trcpInstance'

export const appRouter = t.router({
  replicant: t.router(replicantService),
  interview: t.router(interviewService),
  chat: t.router(chatService),
  info: t.router(infoService),
})

export type AppRouter = typeof appRouter;