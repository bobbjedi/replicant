import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ repId, chatId }: { repId: number, chatId: number }) => frontClient.chat.deleteChat.mutate({ repId, chatId }),
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['chats', variables.repId] })
    },
  })
}