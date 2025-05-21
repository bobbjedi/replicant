<template>
  <div class="q-pa-md">
    <div
      v-if="isLoading"
      class="flex items-center"
    >
      <q-spinner
        size="20px"
        color="info"
        class="q-mr-sm"
      />
    </div>

    <div
      v-else-if="isError"
      class="text-negative"
    >
      Error loading user cards
    </div>

    <div class="q-py-md text-h5">
      <q-icon
        name="arrow_back"
        size="35px"
        class="q-mr-sm cursor-pointer"
        @click="$router.back()"
      />
      User cards of <b>{{ replicant?.name || '...' }}</b>
    </div>

    <div class="q-mb-md">
      <q-btn
        color="primary"
        icon="add"
        label="Create user card"
        @click="createUserCard"
      />
    </div>

    <div
      v-if="isUserCardsLoading"
      class="flex items-center"
    >
      <q-spinner
        size="20px"
        color="info"
        class="q-mr-sm"
      />
    </div>

    <div
      v-else-if="isUserCardsError"
      class="text-negative"
    >
      Error loading user cards
    </div>

    <q-table
      v-else
      :rows="userCards || []"
      :columns="columns"
      row-key="id"
      flat
      bordered
    >
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            flat
            round
            color="primary"
            icon="edit"
            @click="editUserCard(props.row)"
          >
            <q-tooltip>Edit</q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="showCreateDialog">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Create user card</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="newUserCard.name"
            label="Имя"
            :rules="[val => !!val || 'Name is required']"
          />
          <q-input
            v-model="newUserCard.description"
            label="Description"
            type="textarea"
            :rules="[val => !!val || 'Description is required']"
          />
          <q-input
            v-model="newUserCard.role"
            label="Role"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            color="primary"
            v-close-popup
          />
          <q-btn
            flat
            label="Create"
            color="primary"
            @click="handleCreateUserCard"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useReplicant from 'src/api/queries/use-replicant'
import useGetUserCards from 'src/api/queries/use-get-user-cards'

const route = useRoute()
const replicantId = computed(() => Number(route.params.id))

const { data: replicant, isError, isLoading } = useReplicant(replicantId)
const { data: userCards, isError: isUserCardsError, isLoading: isUserCardsLoading } = useGetUserCards(replicantId)

import { ref } from 'vue'
import { useQuasar } from 'quasar'
import useCreateReplicantUserCard from 'src/api/mutations/use-create-replicant-user-card'

const $q = useQuasar()

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left' as const,
    field: 'name',
  },
  {
    name: 'description',
    required: true,
    label: 'Description',
    align: 'left' as const,
    field: 'description',
  },
  {
    name: 'role',
    label: 'Role',
    align: 'left' as const,
    field: 'role',
  },
  {
    name: 'actions',
    label: 'Actions',
    align: 'center' as const,
    field: 'actions',
  },
]

const editUserCard = (card: string) => {
  // TODO: Implement card editing
  console.log('Edit card:', card)
}

const newUserCard = ref({
  name: '',
  description: '',
  role: '',
})

const createUserCardMutation = useCreateReplicantUserCard()

const showCreateDialog = ref(false)

const createUserCard = () => {
  showCreateDialog.value = true
}

const handleCreateUserCard = () => {
  if (newUserCard.value.name && newUserCard.value.description) {
    createUserCardMutation.mutate({
      repId: replicantId.value,
      name: newUserCard.value.name,
      description: newUserCard.value.description,
      role: newUserCard.value.role,
    }, {
      onSuccess: () => {
        $q.notify({
          type: 'positive',
          message: 'User card created successfully',
          position: 'top',
        })
        showCreateDialog.value = false
        newUserCard.value = {
          name: '',
          description: '',
          role: '',
        }
      },
      onError: (error) => {
        $q.notify({
          type: 'negative',
          message: `Error creating user card: ${error}`,
          position: 'top',
        })
      },
    })
  } else {
    $q.notify({
      type: 'warning',
      message: 'Name and description are required to create a user card',
      position: 'top',
    })
  }
}

</script>