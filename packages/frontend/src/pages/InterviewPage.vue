<script setup lang="ts">
import { computed, ref } from 'vue'
import useReplicantsList from 'src/api/queries/use-replicants-list'
import useInterviewTopicsList from 'src/api/queries/use-interview-topics-list'
import { useRoute } from 'vue-router'
import { useLanguageStore } from 'src/stores/langStorage';
import { initializeSpeechRecognition } from 'src/modules/useSpeechRecognition';
import { EMOTIONS } from 'src/constants';

const route = useRoute()
const replicantId = computed(() => Number(route.params.id))

const { data: repList } = useReplicantsList();

const replicant = computed(() => repList.value?.find(rep => rep.id === replicantId.value))
const { data: topics, isLoading, isError } = useInterviewTopicsList(replicantId)

const languageStore = useLanguageStore();

const isShowFirstQuestion = ref(false)
const onStartInterview = () => {
  isShowFirstQuestion.value = true
  question.value = languageStore.firstQuestionMessage
}

const isChoseEmotion = ref(false)
const question = ref<string>('')
const answer = ref<string>('')

const resetQuestion = () => {
  question.value = ''
  answer.value = ''
  isChoseEmotion.value = false
}

const onSelectEmotion = (emotionEn: string) => {
  console.log(emotionEn)
  resetQuestion()
}
// Функция для переключения состояния голосового ввода
const { isListening, toggleSpeechRecognition, stopRecognition, onTranscript } = initializeSpeechRecognition()

onTranscript(v => answer.value += v)
</script>

<template>
  <div class="q-pa-md">
    <div v-if="isLoading" class="flex items-center">
      <q-spinner size="20px" color="primary" class="q-mr-sm" />
      Loading...
    </div>

    <div v-else-if="isError" class="text-negative">
      Error loading topics
    </div>

    <div class="q-pa-md text-h6">Interview page of <b>{{ replicant?.name || '...' }}</b></div>

    <q-card v-if="topics?.length === 0">
      <q-card-section>
        <div class="text-weight-medium text-justify">{{ languageStore.introMessage }}</div>
        <q-separator class="q-mt-md" />
        <div class="text-weight-medium text-justify">{{ languageStore.intro2Message }}</div>
      </q-card-section>
      <q-btn color="primary" v-show="!isShowFirstQuestion" label="Start interview" class="q-ma-md"
        @click="onStartInterview" />
    </q-card>

    <div v-show="question?.length" class="q-pa-md q-mb-md">
      <div class="q-pa-md font-size: 20px">

        <b>Question:</b>
        <div>"{{ question }}"</div>

        <div class="q-mt-md">Ответь на вопрос, поставь эмоцию и нажми кнопку "Отправить"</div>
      </div>

      <q-btn label="Voice" class="q-ma-sm " @click="toggleSpeechRecognition"
        :color="isListening ? 'negative' : 'primary'" :icon="isListening ? 'mic_off' : 'mic'" />

      <q-btn label="I`am answered" class="q-ma-sm" @click="stopRecognition(), isChoseEmotion = true"
        :color="answer.length < 5 ? 'primary' : 'positive'" icon="done" :disable="isChoseEmotion || answer.length < 5" />

      <div class="emotion-buttons" v-if="isChoseEmotion">
        <div class="q-ma-sm">Choose your emotion:</div>
        <q-btn v-for="emotion in EMOTIONS" :key="emotion.EN" :label="`${emotion.emoji} ${emotion[languageStore.lang]}`" :style="{backgroundColor: emotion.color}" flat
          @click="onSelectEmotion(emotion.EN)" class="q-ma-sm"/>
      </div>

      <q-input v-model="answer" filled type="textarea" />
    </div>

    <q-list v-if="topics?.length" bordered class="rounded-borders q-pa-md" style="width: 100%; margin: 0 auto">
      <q-expansion-item v-for="topic in topics" :key="topic.topic" expand-separator icon="perm_identity"
        label="Account settings" caption="John Doe">
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
