import { useQuery } from "@tanstack/vue-query"
import { frontClient } from "../frontClient"
import type { Ref } from "vue"

export default (repId: Ref<number>) => {
    return useQuery({
        queryKey: ['replicant', repId],
        queryFn: () => frontClient.replicant.get.query({ id: repId.value }),
        refetchOnWindowFocus: true,
        placeholderData: (previousData) => previousData,
    })
}