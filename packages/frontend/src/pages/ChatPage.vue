<template>
  <div class="q-pa-md">
    <div
      v-if="isChatLoading"
      class="flex items-center"
    >
      <q-spinner
        size="20px"
        color="info"
        class="q-mr-sm"
      />
    </div>

    <div
      v-else-if="isChatError"
      class="text-negative"
    >
      Error loading chat
    </div>

    <div v-else>
      <div class="q-py-md text-h5">
        <q-icon
          name="arrow_back"
          size="35px"
          class="q-mr-sm cursor-pointer"
          @click="$router.back()"
        />
        Chat: <b>{{ chat?.description || '...' }}</b>
      </div>

      <div class="chat-container">
        <div
          ref="messagesContainer"
          class="messages-container"
          @scroll="handleScroll"
        >
          <div
            v-if="isLoadingMore"
            class="flex justify-center q-my-md"
          >
            <q-spinner
              size="20px"
              color="info"
            />
          </div>

          <div
            v-for="message in messages"
            :key="message.id"
            class="message q-mb-md"
            :class="{ 'message-user': !message.authorIsReplicant }"
          >
            <div class="message-content">
              {{ message.content }}
              <div
                v-if="message.authorIsReplicant"
                class="text-secondary"
              >
                [ {{ message.emoji }} {{ message.emotion }} ]
              </div>
            </div>
            <div class="message-time text-caption">
              {{ formatDate(message.createdAt) }}
            </div>
          </div>
        </div>

        <div class="input-container">
          <q-input
            v-model="newMessage"
            type="textarea"
            max-rows="2"
            placeholder="Type a message..."
            @keyup.enter.ctrl="sendMessage"
            :disable="isPendingAnswer"
            hint="Press Ctrl+Enter to send message"
            class="full-width"
          />
          <q-btn
            color="primary"
            icon="send"
            :loading="isPendingAnswer"
            :disable="!newMessage || isPendingAnswer"
            @click="sendMessage"
          >
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import useGetMessages from 'src/api/queries/use-get-messages'
import useSendMessage from 'src/api/mutations/use-send-message'
import type { TMessage } from 'src/api/queries/use-get-messages'
import type { InfiniteData } from '@tanstack/vue-query'
import useGetChat from 'src/api/queries/use-get-chat'

const route = useRoute()
const $q = useQuasar()
const chatId = computed(() => Number(route.params.chatId))
const messagesContainer = ref<HTMLElement | null>(null)
const newMessage = ref('')
const beforeId = ref(10000000000000000)
const count = 5

const { data: chat, isLoading: isChatLoading, isError: isChatError } = useGetChat(chatId)

const query = ref({
  chatId: chatId.value,
  beforeId: beforeId.value,
  count: count,
})

const {
  data: messagesData,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage: isLoadingMore,
} = useGetMessages(query)

const messages = computed(() => {
  const data = messagesData.value as InfiniteData<TMessage[]> | undefined
  const allMessages = data?.pages.flat() || []
  return [...allMessages].reverse()
})

const sendMessageMutation = useSendMessage()
const isPendingAnswer = computed(() => sendMessageMutation.isPending.value)

const formatDate = (date: string) => {
  return new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

const handleScroll = async (e: Event) => {
  const target = e.target as HTMLElement
  if (target.scrollTop === 0 && hasNextPage.value && !isLoadingMore.value) {
    query.value = {
      ...query.value,
      beforeId: messages.value[0]?.id || 10000000000000000,
    }
    await fetchNextPage()

  }
}

const sendMessage = () => {
  if (!newMessage.value) { return }

  sendMessageMutation.mutate({
    chatId: chatId.value,
    content: newMessage.value,
  }, {
    onSuccess: (response) => {
      console.log('response:', response)
      const messages_ = response as TMessage[]
      messages.value.push(...messages_)
      newMessage.value = ''
      scrollToBottom(true)
    },
    onError: (error) => {
      $q.notify({
        type: 'negative',
        message: `Error sending message: ${error}`,
        position: 'top',
      })
    },
  })
}

onMounted(() => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
})

const scrollToBottom = (isSmooth = true) => {

  void nextTick(() => {
    // TODO: добавить плавную анимацию скролла
    if (messagesContainer.value) {
      messagesContainer.value.scrollTo({
        top: messagesContainer.value.scrollHeight,
        behavior: isSmooth ? 'smooth' : 'instant',
      })
    }
  })
}

watch(messages, () => scrollToBottom(false), { deep: true, once: true })

</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  border: 1px solid #ddd;
  border-radius: 8px;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.message {
  max-width: 70%;
  margin-left: auto;
}

.message-user {
  margin-left: 0;
  margin-right: auto;
}

.message-content {
  background: #e3f2fd;
  padding: 8px 12px;
  border-radius: 12px;
  word-break: break-word;
}

.message-user .message-content {
  background: #e8f5e9;
}

.message-time {
  margin-top: 4px;
  opacity: 0.7;
}

.input-container {
  display: flex;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid #ddd;
  background: white;
  width: 100%;
}

.input-container .q-input {
  flex: 1;
  width: 100%;
}
</style>