<template>
  <div class="q-pa-md">
    <div v-if="isLoading" class="flex items-center">
      <q-spinner size="20px" color="info" class="q-mr-sm" />
    </div>

    <div v-else-if="isError" class="text-negative">
      Error loading topics
    </div>

    <div class="q-py-md text-h5">
      <q-icon name="arrow_back" size="35px" class="q-mr-sm cursor-pointer" @click="$router.back()" />
      Create new chat of <b>{{ replicant?.name || '...' }}</b>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useReplicant from 'src/api/queries/use-replicant'

const route = useRoute()
const replicantId = computed(() => Number(route.params.id))

const { data: replicant, isError, isLoading } = useReplicant(replicantId)

</script>