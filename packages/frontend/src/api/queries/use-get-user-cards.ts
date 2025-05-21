import { useQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'
import type { Ref } from 'vue'

export default (replicantId: Ref<number>) => useQuery({
  queryKey: ['user-cards', replicantId.value],
  queryFn: () => frontClient.chat.getReplicantUserCards.query({ repId: replicantId.value }),
  refetchOnWindowFocus: true,
  placeholderData: (previousData) => previousData,
  refetchInterval: 3000,
})