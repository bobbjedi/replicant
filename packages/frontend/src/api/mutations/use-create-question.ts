import { useMutation, useQueryClient } from "@tanstack/vue-query"
import { frontClient } from "../frontClient"

export default () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: {
            repId: number
            question: string
            emotion: string
            topic: string
            answerText: string
            questionText: string
        }) => frontClient.crateInterviewQuestion.mutate(data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['interview-topics-list'] }).catch(console.error)
        },
    })
}