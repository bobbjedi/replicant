import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default function useSendMessage () {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (message: TSendMessageMutationData) => frontClient.chat.sendMessage.mutate(message),
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({ queryKey: ['messages', { chatId: variables.chatId }] })
    },
  })
}

export type TSendMessageMutationData = Parameters<typeof frontClient.chat.sendMessage.mutate>[0]