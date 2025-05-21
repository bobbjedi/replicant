import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TCreateReplicantChatMutationData) => frontClient.chat.createReplicantChat.mutate(data),
    onSuccess (data) {
      queryClient.invalidateQueries({ queryKey: ['replicant-chats', data.replicantId] }).catch(console.error)
    },
  })
}

export type TCreateReplicantChatMutationData = Parameters<typeof frontClient.chat.createReplicantChat.mutate>[0]