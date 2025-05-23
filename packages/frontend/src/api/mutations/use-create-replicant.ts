import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { frontClient } from '../frontClient'

export default () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: {
            name: string,
            description: string
            lang: 'RU' | 'EN'
        }) => frontClient.replicant.create.mutate(data),
    onSuccess () {
      queryClient.invalidateQueries({ queryKey: ['replicants-list'] }).catch(console.error)
    },
  })
}