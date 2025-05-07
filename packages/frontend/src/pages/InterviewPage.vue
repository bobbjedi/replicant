<template>
  <div class="q-pa-md">
    <div v-if="isLoading || isCreateQuestionPending" class="flex items-center">
      <q-spinner size="20px" color="info" class="q-mr-sm" />
    </div>

    <div v-else-if="isError" class="text-negative">
      Error loading topics
    </div>

    <div class="q-py-md text-h5">
      <q-icon name="arrow_back" size="35px" class="q-mr-sm cursor-pointer" @click="$router.back()" />
      Interview page of <b>{{ replicant?.name || '...' }}</b>
    </div>

    <q-card v-if="topics?.[0]?.questions?.length === 0">
      <q-card-section>
        <div class="text-weight-medium text-justify">{{ languageStore.introMessage }}</div>
        <q-separator class="q-my-md" />
        <div class="text-weight-medium text-justify">{{ languageStore.intro2Message }}</div>
      </q-card-section>
      <q-btn color="primary" v-show="!isShowFirstQuestion" label="Start interview" class="q-ma-md"
        @click="onStartInterview" />
    </q-card>

    <div class="text-h6 q-pt-md" v-show="topicName?.length">Topic: {{ topicName }}
      <q-btn label="Change topic" color="primary" icon="add_comment" @click="isShowChangeTopicDialog = true"
        class="q-ma-sm" :disable="isLoadingNextQuestion" />
    </div>

    <InterviewChat v-show="topicName?.length" :questionText="questionText"
      :isLoadingNextQuestion="isLoadingNextQuestion" @on-answer="onSendAnswer" />

    <InterviewTopicsList :topics="topics" @switch-topic="onSwitchTopicTo" />

    <q-dialog v-model="isShowChangeTopicDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Please choose new topic</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-btn v-for="topic in actualTopicsList" color="secondary" :key="topic.EN"
            :label="`${topic.emoji} ${topic[lang]}`" @click="newTopicName = topic[lang]" class="q-ma-sm" />
          <div>Other topic:</div>
          <q-input v-model="newTopicName" label="Input new topic" filled type="textarea" />
        </q-card-section>
        <div class="q-pa-md flex justify-end">
          <q-btn @click="newTopicName = ''" color="negative" label="Cancel" v-close-popup class="q-mr-sm"
            style="min-width: 130px" />
          <q-btn @click="onNewTopicChosen" color="positive" label="Confirm change topic" v-close-popup
            style="min-width: 130px;" />
        </div>
      </q-card>
    </q-dialog>

  </div>
</template>


<script setup lang="ts">
import { computed, ref, unref, watch, watchEffect } from 'vue'
import useReplicantsList from 'src/api/queries/use-replicants-list'
import useInterviewTopicsList from 'src/api/queries/use-interview-topics-list'
import { useRoute } from 'vue-router'
import { useLanguageStore } from 'src/stores/langStorage';
import InterviewChat from 'src/components/InterviewChat.vue'
import InterviewTopicsList from 'src/components/InterviewTopicsList.vue'
import { BASE_TOPICS, FIRST_TOPIC_NAME } from 'src/constants';
import useCreateQuestion from 'src/api/mutations/use-create-question';
import { Notify } from 'quasar';
import { frontClient } from 'src/api/frontClient';

const { mutateAsync: createQuestion, isPending: isCreateQuestionPending } = useCreateQuestion()

const route = useRoute()
const replicantId = computed(() => Number(route.params.id))

const { data: repList } = useReplicantsList();

const replicant = computed(() => repList.value?.find(rep => rep.id === replicantId.value))
const { data: topics, isLoading, isError } = useInterviewTopicsList(replicantId)

const languageStore = useLanguageStore();

const lang = computed(() => languageStore.lang);
const isShowFirstQuestion = ref(false)
const isShowChangeTopicDialog = ref(false)
const questionText = ref<string>('')
const topicName = ref<string>('')
const newTopicName = ref<string>('')

const knownTopics = computed(() => topics.value?.map(t => t[lang.value]) || [])
const actualTopicsList = computed(() => BASE_TOPICS.filter(t => !knownTopics.value.includes(t[lang.value])))
const onStartInterview = () => {
  isShowFirstQuestion.value = true
  questionText.value = languageStore.firstQuestionMessage
  topicName.value = FIRST_TOPIC_NAME[languageStore.lang]
}

const onSendAnswer = async ({ answerText, emotion }: { answerText: string, emotion: string }) => {
  const req = {
    repId: replicantId.value,
    question: questionText.value,
    emotion: emotion,
    topicName: topicName.value,
    answerText: answerText,
    questionText: questionText.value
  }
  const resp = await createQuestion(req)

  console.info('Resp create question:', resp)

  if (resp.id) {
    Notify.create({ message: 'Success', color: 'positive' })
  } else {
    Notify.create({ message: 'Error', color: 'negative' })
  }
  questionText.value = '' // onGetNextQuestion in watchEffect will be called
}

const isLoadingNextQuestion = ref(false)
const onGetNextQuestion = async (v: string) => {
  console.info('onGetNextQuestion', topicName.value, lang.value, v)
  isLoadingNextQuestion.value = true
  try {
    const resp = await frontClient.generateNextQuestionText.query({
      repId: unref(replicantId),
      topicName: unref(topicName),
      lang: unref(lang),
    })
    console.log('Resp generate next question:', resp)
    questionText.value = resp
  } catch (error) {
    console.error(error)
  }
  isLoadingNextQuestion.value = false
}
const onGetFirstQuestionForNewTopic = async () => {
  console.info('onGetFirstQuestion', topicName.value, lang.value)
  isLoadingNextQuestion.value = true
  try {
    const resp = await frontClient.generateFirstQuestionOfTopic.query({
      repId: unref(replicantId),
      topicName: unref(topicName),
      lang: unref(lang),
    })
    console.log('Resp onGetFirstQuestionForNewTopic:', resp)
    questionText.value = resp
  } catch (error) {
    console.error(error)
  }
  isLoadingNextQuestion.value = false
}

const onNewTopicChosen = () => {
  topicName.value = newTopicName.value
  newTopicName.value = ''
  onGetFirstQuestionForNewTopic().catch(console.error)
}

const onSwitchTopicTo = (topic: string) => {
  topicName.value = topic
  onGetNextQuestion('AFTER SWITCH TOPIC').catch(console.error)
}

watch(replicantId, () => questionText.value = '')

watchEffect(() => {
  if (topics.value?.[0]?.questions?.length && questionText.value.length === 0) {
    topicName.value = topics.value[0]?.name || ''
    onGetNextQuestion('IN_WATCH_EFFECT').catch(console.error)
  }
})
</script>
