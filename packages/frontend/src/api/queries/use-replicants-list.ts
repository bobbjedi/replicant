import { useQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default () => {
  return useQuery({
    queryKey: ['replicants-list'],
    queryFn: () => frontClient.replicant.getAll.query(),
    refetchOnWindowFocus: true,
    placeholderData: (previousData) => previousData,
  })
}