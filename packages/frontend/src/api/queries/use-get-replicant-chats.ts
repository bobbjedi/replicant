import { useQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default (replicantId: number) => useQuery({
  queryKey: ['replicant-chats', replicantId],
  queryFn: () => frontClient.chat.getReplicantChats.query({ repId: replicantId }),
  refetchOnWindowFocus: true,
  placeholderData: (previousData) => previousData,
  refetchInterval: 3000,
})