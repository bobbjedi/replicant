import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TCreateReplicantUserCardMutationData) => frontClient.chat.createReplicantUserCard.mutate(data),
    onSuccess (data) {
      queryClient.invalidateQueries({ queryKey: ['user-cards', data.replicantId] }).catch(console.error)
    },
  })
}

export type TCreateReplicantUserCardMutationData = Parameters<typeof frontClient.chat.createReplicantUserCard.mutate>[0]