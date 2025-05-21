import { useQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'
import type { Ref } from 'vue'

export default function useGetChats (replicantId: Ref<number>) {
  return useQuery({
    queryKey: ['chats', replicantId],
    queryFn: () => frontClient.chat.getReplicantChats.query({ repId: replicantId.value }),
    enabled: !!replicantId.value,
  })
}
export type TChat = Awaited<ReturnType<typeof frontClient.chat.getReplicantChats.query>>[number]