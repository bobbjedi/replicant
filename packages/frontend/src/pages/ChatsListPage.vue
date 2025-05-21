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
      Error loading chats
    </div>

    <div class="q-py-md text-h5">
      <q-icon
        name="arrow_back"
        size="35px"
        class="q-mr-sm cursor-pointer"
        @click="$router.back()"
      />
      Chats of <b>{{ replicant?.name || '...' }}</b>
    </div>

    <div class="q-mb-md">
      <q-btn
        color="primary"
        icon="add"
        label="Create chat"
        @click="showCreateDialog = true"
      />
    </div>

    <q-table
      :rows="chats || []"
      :columns="columns"
      row-key="id"
      flat
      bordered
      @row-click="onRowClick"
    >
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            flat
            round
            color="primary"
            icon="edit"
            @click.stop="editChat(props.row)"
          >
            <q-tooltip>Edit</q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="showCreateDialog">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Create new chat</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="newChat.description"
            label="Description"
            :rules="[val => !!val || 'Description is required']"
          />
          <q-select
            v-model="newChat.userCardId"
            :options="userCards"
            option-label="name"
            option-value="id"
            @update:model-value="(val) => newChat.userCardId = val?.id"
            label="User Card"
            :rules="[val => !!val || 'User card is required']"
          />
        </q-card-section>

        DEGUG: [{{ newChat }}]
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
            @click="handleCreateChat"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import useReplicant from 'src/api/queries/use-replicant'
import useGetUserCards from 'src/api/queries/use-get-user-cards'
import useCreateChat from 'src/api/mutations/use-create-replicant-chat'
import useGetChats from 'src/api/queries/use-get-chats'
import type { TChat } from 'src/api/queries/use-get-chats'
const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const replicantId = computed(() => Number(route.params.id))

const { data: replicant, isError, isLoading } = useReplicant(replicantId)
const { data: userCards } = useGetUserCards(replicantId)
const { data: chats } = useGetChats(replicantId)

const showCreateDialog = ref(false)
const createChatMutation = useCreateChat()

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left' as const,
    field: 'name',
  },
  {
    name: 'userCard',
    label: 'User Card',
    align: 'left' as const,
    field: row => userCards?.value?.find(card => card.id === row.userCardId)?.name || '',
  },
  {
    name: 'actions',
    label: 'Actions',
    align: 'center' as const,
    field: 'actions',
  },
]

const newChat = ref({
  description: '',
  userCardId: null as number | null,
})

const onRowClick = (_: unknown, row: TChat) => {
  void router.push(`/${replicantId.value}/chats/${row.id}`)
}

const editChat = (chat: TChat) => {
  // TODO: Implement chat editing
  console.log('Edit chat:', chat)
}

const handleCreateChat = () => {
  if (newChat.value.userCardId) {
    createChatMutation.mutate({
      repId: replicantId.value,
      userCardId: newChat.value.userCardId,
    }, {
      onSuccess: () => {
        $q.notify({
          type: 'positive',
          message: 'Chat created successfully',
          position: 'top',
        })
        showCreateDialog.value = false
        newChat.value = {
          description: '',
          userCardId: null,
        }
      },
      onError: (error) => {
        $q.notify({
          type: 'negative',
          message: `Error creating chat: ${error}`,
          position: 'top',
        })
      },
    })
  } else {
    $q.notify({
      type: 'warning',
      message: 'Name and user card are required to create a chat',
      position: 'top',
    })
  }
}
</script>