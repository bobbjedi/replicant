import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TCreateReplicantChatMutationData) => frontClient.chat.createReplicantChat.mutate(data),
    onSuccess (data) {
      void queryClient.invalidateQueries({ queryKey: ['chats', data.replicantId] })
    },
  })
}

export type TCreateReplicantChatMutationData = Parameters<typeof frontClient.chat.createReplicantChat.mutate>[0]