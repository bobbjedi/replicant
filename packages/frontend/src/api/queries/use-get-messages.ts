import { useInfiniteQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'
import { computed, type Ref } from 'vue'

export default function useGetMessages (query: Ref<TMessagesRequest>) {
  return useInfiniteQuery({
    queryKey: ['messages', query.value],
    queryFn: () => {
      return frontClient.chat.getMessagesByChatId.query({
        chatId: query.value.chatId,
        beforeId: query.value.beforeId,
        count: query.value.count,
      })
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === query.value.count ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
    enabled: computed(() => !!query.value.chatId),
  })
}

export type TMessage = Awaited<ReturnType<typeof frontClient.chat.getMessagesByChatId.query>>[number]
export type TMessagesRequest = Parameters<typeof frontClient.chat.getMessagesByChatId.query>[0]