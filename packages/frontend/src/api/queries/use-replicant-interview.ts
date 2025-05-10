import { useQuery } from "@tanstack/vue-query"
import { frontClient } from "../frontClient"
import type { Ref } from "vue"

export default (repId: Ref<number>) => {
    return useQuery({
        queryKey: ['interview-by-replicant-id', repId],
        queryFn: () => frontClient.replicant.getInterview.query({ repId: repId.value }),
        refetchOnWindowFocus: true,
        placeholderData: (previousData) => previousData,
    })
}