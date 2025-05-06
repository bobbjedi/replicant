import * as express from 'express'
import * as cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { appRouter } from './trpc/router'

const app = express()
app.use(cors())

app.use('/trpc', createExpressMiddleware({ router: appRouter }))

app.listen(4000, () => {
  console.log('🚀 Server running on http://localhost:4000/trpc')
})