import { useMutation } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default function useSendMessage () {
  return useMutation({
    mutationFn: (message: TSendMessageMutationData) => frontClient.chat.sendMessage.mutate(message),
  })
}

export type TSendMessageMutationData = Parameters<typeof frontClient.chat.sendMessage.mutate>[0]