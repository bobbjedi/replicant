<template>

  <div
    v-if="topics?.length"
    class=" q-pt-md"
  >

    <div class="text-h6 q-pt-md">Topics</div>

    <q-list
      bordered
      class="rounded-borders q-pa-md"
      style="width: 100%; margin: 0 auto"
    >
      <q-expansion-item
        v-for="topic in topics"
        :key="topic.name"
        expand-separator
        icon="question_answer"
      >
        <template v-slot:header>
          <div
            class="row items-center justify-between q-gutter-sm"
            style="width: 100%"
          >
            <div class="row items-center q-gutter-sm">
              <q-icon
                name="question_answer"
                size="md"
              />
              <div>
                <div class="text-subtitle1">{{ topic.name }}</div>
                <div class="text-caption">
                  Questions: {{ topic.questions.length }} |
                  Updated: {{ new Date(topic?.updatedAt || 0).toLocaleString() }}
                </div>
              </div>
            </div>
            <q-btn
              flat
              dense
              icon="start"
              color="positive"
              @click.stop="switchToTopic(topic.name)"
              :title="'Переключиться на топик'"
            />
          </div>
        </template>

        <q-card>
          <q-list
            bordered
            class="rounded-borders q-pa-md"
            style="width: 100%; margin: 0 auto"
          >
            <q-expansion-item
              v-for="question in topic.questions"
              :key="question.id"
              expand-separator
              icon="help"
              :label="question.questionText"
              :caption="`${getEmotionEmoji(question.emotion)} [${new Date(question.createdAt).toLocaleString()}]`"
            >
              <q-card-section>{{ question.answerText }}</q-card-section>
            </q-expansion-item>
          </q-list>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import type { TTopic } from 'src/api/queries/use-interview-topics-list'
import { EMOTIONS } from 'src/constants'
import { useLanguageStore } from 'src/stores/langStorage'

const emits = defineEmits(['switchTopic'])

defineProps<{
  topics: TTopic[] | undefined
}>()
const $q = useQuasar()

const languageStore = useLanguageStore()
const switchToTopic = (topic: string) => {
  $q.dialog({
    title: 'Confirm',
    message: `Are you sure you want to switch to "${topic}" topic?`,
    cancel: true,
  }).onOk(() => {
    emits('switchTopic', topic)
  })
}
const getEmotionEmoji = (emotion: string) => {
  const emotionMeta = EMOTIONS.find(e => e.EN === emotion)

  return `${emotionMeta?.emoji || ''} ${emotionMeta?.[languageStore.lang] || emotion}`
}

</script>