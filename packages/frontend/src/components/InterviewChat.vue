<template>
  <div class="q-pb-0" :class="isLoadingNextQuestion ? 'disabled' : ''">
    <div class="">

      <b class="text-subtitle1">Question:</b>
      <div>
        <q-spinner v-if="isLoadingNextQuestion" size="20px" color="info" class="q-mr-sm" />
        <span v-else class="text-subtitle1 txt-info">{{ questionText }}</span>
      </div>

      <div class="q-mt-md text-subtitle1">Ответь на вопрос, поставь эмоцию и нажми кнопку "Отправить"</div>
    </div>

    <q-btn label="Voice" class="q-ma-sm " @click="toggleSpeechRecognition" :color="isListening ? 'negative' : 'primary'"
      :icon="isListening ? 'mic_off' : 'mic'" />

    <q-btn label="I`am answered" class="q-ma-sm" @click="stopRecognition(), isChoseEmotion = true"
      :color="answerText.length < 5 ? 'primary' : 'positive'" icon="done"
      :disable="isChoseEmotion || answerText.length < 5" />


    <q-btn label="Skip question" class="q-ma-sm" @click="isSkipQuestionDialogShow = true" color="negative" icon="close"
      :disable="isChoseEmotion" />

    <q-dialog v-model="isSkipQuestionDialogShow">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Please choose reason of skipping</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-btn v-for="skipReason in SKIP_REASONS" color="secondary" :key="skipReason.EN"
            :label="`${skipReason.emoji} ${skipReason[lang]}`" @click="skipReasonText = skipReason[lang]"
            class="q-ma-sm" />
          <div>Other reason:</div>
          <q-input v-model="skipReasonText" label="Input reason" filled type="textarea" />
        </q-card-section>
        <div class="q-pa-md flex justify-end">
        <q-btn @click="skipReasonText = ''" color="negative" label="Cancel" v-close-popup class="q-mr-sm" style="min-width: 130px" />
        <q-btn @click="onSkipQuestion" color="positive" label="Confirm skip" v-close-popup style="min-width: 130px;" />
        </div>
      </q-card>
    </q-dialog>


    <div class="emotion-buttons" v-if="isChoseEmotion">
      <div class="q-ma-sm">Choose your emotion:</div>
      <q-btn v-for="emotion in EMOTIONS" :key="emotion.EN" :label="`${emotion.emoji} ${emotion[lang]}`"
        :style="{ backgroundColor: emotion.color }" flat @click="onSelectEmotion(emotion.EN)" class="q-ma-sm" />
    </div>

    <q-input v-model="answerText" label="Input answer" filled type="textarea" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { EMOTIONS, SKIP_REASON_PREFIX, SKIP_REASONS } from '../constants';
import { useLanguageStore } from 'src/stores/langStorage';
import { initializeSpeechRecognition } from 'src/modules/useSpeechRecognition';

const props = defineProps<{
  questionText: string,
  isLoadingNextQuestion?: boolean
}>();


const emits = defineEmits(['onAnswer', 'onNewTopicChosen']);

const languageStore = useLanguageStore();
const lang = computed(() => languageStore.lang);


const answerText = ref<string>('')
const skipReasonText = ref<string>('')
const newTopicName = ref<string>('')

const isChoseEmotion = ref(false)
const isSkipQuestionDialogShow = ref(false)

const resetQuestion = () => {
  answerText.value = ''
  skipReasonText.value = ''
  newTopicName.value = ''
  isChoseEmotion.value = false
}

watch(() => props.questionText, v => {
  if (v.length === 0) {
    resetQuestion()
  }
})

const onSelectEmotion = (emotionEn: string) => {
  emits('onAnswer', {
    answerText: answerText.value,
    emotion: emotionEn
  })
  resetQuestion()
}
const onSkipQuestion = () => {
  answerText.value = SKIP_REASON_PREFIX[lang.value] + skipReasonText.value
  isChoseEmotion.value = true
}
// Функция для переключения состояния голосового ввода
const { isListening, toggleSpeechRecognition, stopRecognition, onTranscript } = initializeSpeechRecognition()

onTranscript(v => answerText.value += v)
</script>