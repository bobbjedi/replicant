import { useQuery } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'
import type { Ref } from 'vue'

export default (queryParams: Ref<TGetChatMessagesQueryParams>) => useQuery({
  queryKey: ['chat-messages', queryParams.value.chatId],
  queryFn: () => frontClient.chat.getMessagesByChatId.query(queryParams.value),
  refetchOnWindowFocus: true,
  placeholderData: (previousData) => previousData,
  refetchInterval: 3000,
})

export type TGetChatMessagesQueryParams = Parameters<typeof frontClient.chat.getMessagesByChatId.query>[0]