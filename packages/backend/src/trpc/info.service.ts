import { inProcessingRefreshSnapshot } from '../workers/refreshSnapshot.task'
import t from './trcpInstance'

const getSystemData = t.procedure.query(() => {
  return {
    inProcessingRefreshSnapshot,
  }
})

export const infoService = {
  getSystemData,
}