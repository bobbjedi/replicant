import { useQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'
import type { Ref } from 'vue'

export default function useGetChat (chatId: Ref<number>) {
  return useQuery({
    queryKey: ['chat', chatId],
    queryFn: () => frontClient.chat.getChatById.query({ chatId: chatId.value }),
    enabled: !!chatId.value,
  })
}
export type TChat = Awaited<ReturnType<typeof frontClient.chat.getReplicantChats.query>>[number]