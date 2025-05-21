import { useQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default () => useQuery({
  queryKey: ['system-info'],
  queryFn: () => frontClient.info.getSystemData.query(),
  refetchOnWindowFocus: true,
  placeholderData: (previousData) => previousData,
  refetchInterval: 3000,
})