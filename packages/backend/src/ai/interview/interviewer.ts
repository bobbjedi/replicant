import { DEFAULT_TOPICS_META } from '../../../../shared/src/constants'
import { EMainTopicType, TopicModel } from '../../../../shared/src/types'
import { useChat } from '../adapters/aiClient'
import { Role } from '../adapters/gpt.types'
import { buildPromptForTopic } from './getSystemPromptInterview'

export const generateNextQuestionByQuestionsListFromChat = ({ greetingTopic, currentTopic, nativeLanguage, topicName }: {
  greetingTopic: TopicModel | null
  currentTopic: TopicModel
  topicName: string
  nativeLanguage: 'RU' | 'EN'
  }) => {

  const topicType = DEFAULT_TOPICS_META.find(t => t[nativeLanguage] === topicName)?.type as EMainTopicType
  const systemPrompt = buildPromptForTopic(topicName, topicType, nativeLanguage)

  const topics = [currentTopic]
  if (greetingTopic) {
    topics.unshift(greetingTopic)
  }

  return useChat([
    { role: Role.SYSTEM, content: systemPrompt },
    { role: Role.USER, content: convertTopicsToTextFormat(topics) },
  ])
}

export const generateFirstQuestionOfNewTopicFromChat = async ({ greetingTopic, topicName, nativeLanguage }: {
  greetingTopic: TopicModel
   topicName: string
    nativeLanguage: 'RU' | 'EN'
}) => {

  const topicType = DEFAULT_TOPICS_META.find(t => t[nativeLanguage] === topicName)?.type as EMainTopicType

  const systemPrompt = buildPromptForTopic(topicName, topicType, nativeLanguage)
  return useChat([
    { role: Role.SYSTEM, content: systemPrompt },
    { role: Role.USER, content: convertTopicsToTextFormat([greetingTopic]) },
  ])
}

export const convertTopicsToTextFormat = (topics: TopicModel[]): string => {
  let result = ''

  topics.forEach((topic) => {
    result += `Topic: ${topic.name}\n`

    topic.questions.forEach((q) => {
      result += `#${q.id} \nQ: ${q.questionText}\nA: ${q.answerText}\nE: ${q.emotion}\n`
    })

    result += '\n---\n' // Разделитель между топиками
  })

  return result.trim() // Убираем лишний пробел в конце
}