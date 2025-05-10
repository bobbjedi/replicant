<script setup lang="ts">
import { ref } from 'vue'
import { Notify } from 'quasar'
import useReplicantsList from 'src/api/queries/use-replicants-list'
import useCreateReplicant from 'src/api/mutations/use-create-replicant'
import { useRouter } from 'vue-router';
import { useLanguageStore } from 'src/stores/langStorage';
import { frontClient } from 'src/api/frontClient';
import useGetInfo from 'src/api/queries/use-get-info';

const languageStore = useLanguageStore();

const { data: systemInfo } = useGetInfo()
const { data: repList, isLoading, isError } = useReplicantsList();
const { mutateAsync: createReplicant } = useCreateReplicant()

const createDialog = ref(false)
const newName = ref('')
const newDescription = ref('')

const createReplicantHandler = async () => {
  const res = await createReplicant({
    name: newName.value,
    description: newDescription.value,
    lang: languageStore.lang
    // password: newPassword.value
  })
  if (res.id) {
    Notify.create({ message: 'Replicant created', color: 'positive' })
    createDialog.value = false
    newName.value = ''
    // newPassword.value = ''
  } else {
    Notify.create({ message: 'Error creating replicant', color: 'negative' })
  }
}

function submitCreate() {
  if (newName.value?.length > 5) {
    createReplicantHandler().catch(console.error)
    return
  }
  Notify.create({ message: 'Name must be more than 5 symbols', color: 'warning' })
}

const router = useRouter()
const goToInterview = (id: number) => {
  router.push(`/interview/${id}`).catch(console.error)
}
const isRefreshModel = ref(false)


const refreshInterviewSnapshot = (id: number, method: 'refreshInterviewSnapshot' | 'deepRefreshInterviewSnapshot') => {
  isRefreshModel.value = true
  frontClient.interview[method].mutate({ repId: id }).then((res) => {
    isRefreshModel.value = false
    Notify.create({ message: res.message, color: res.success ? 'positive' : 'negative' })
  }).catch(err => {
    console.error('Update model error:', err)
    isRefreshModel.value = false
    Notify.create({ message: 'Error update replicant model', color: 'negative' })
  })
}

</script>

<template>
  <div class="q-pa-md">
    <div v-if="isLoading" class="flex items-center">
      <q-spinner size="20px" color="primary" class="q-mr-sm" />
      Loading...
    </div>

    <div v-else-if="isError" class="text-negative">
      Error loading replicants
    </div>
    <q-list bordered class="rounded-borders q-pa-md" style="width: 100%; margin: 0 auto">
      <q-item-label header class="text-h6 q-mb-md">Replicants</q-item-label>

      <q-item clickable v-ripple v-for="rep in repList" :key="rep.id" class="q-mb-sm rounded-borders"
        style="border: 1px solid #ccc">
        <q-item-section avatar>
          <q-avatar size="48px">
            <img :src="`https://api.dicebear.com/7.x/bottts/svg?seed=${rep.id}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1" class="text-subtitle1">{{ rep.name }}</q-item-label>
          <q-item-label caption lines="2" class="q-mt-xs">
            {{ rep.description || 'No description' }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top class="text-caption text-grey">
          <div>created at</div>
          <div>{{ new Date(rep.createdAt).toLocaleString() }}</div>
        </q-item-section>

        <q-item-section side>
          <q-btn icon="mic" color="primary" label="Interview" dense @click.stop="goToInterview(rep.id)"
            class="q-ma-sm" />
          <q-btn color="primary" icon="refresh" label="Deep Snapshot" dense @click.stop="refreshInterviewSnapshot(rep.id, 'deepRefreshInterviewSnapshot')"
            class="q-ma-sm" :loading="systemInfo?.inProcessingRefreshSnapshot?.includes(rep.id)" />

            <q-btn color="primary" icon="refresh" label="Light Snapshot" dense @click.stop="refreshInterviewSnapshot(rep.id, 'refreshInterviewSnapshot')"
            class="q-ma-sm" :loading="systemInfo?.inProcessingRefreshSnapshot?.includes(rep.id)" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-btn color="primary" label="Create replicant" icon="add" class="q-mt-md" @click="createDialog = true"
      unelevated />

    <!-- Диалог создания репликанта -->
    <q-dialog v-model="createDialog">
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">New Replicant</div>
        </q-card-section>

        <q-card-section class="q-gutter-md">
          <q-input v-model="newName" label="Name" filled />
          <q-input v-model="newDescription" label="Description" filled />
          <!-- <q-input v-model="newPassword" label="Key of encryption" filled type="password" /> -->
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn color="primary" label="Create" @click="submitCreate" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
