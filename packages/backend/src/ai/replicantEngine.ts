import { DEFAULT_TOPICS_META } from '../../../shared/src/constants'
import { TopicModel } from '../../../shared/src/types'
import { chat, Role } from './adapters/aiClient'
import { getSystemPromptNewQuestion, getSystemPromptNewTopic } from './getSystemPrompt'

export const generateNextQuestionByQuestionsListFromChat = ({ greetingTopic, currentTopic, nativeLanguage, topicName }: {
  greetingTopic: TopicModel | null
  currentTopic: TopicModel
  topicName: string
  nativeLanguage: 'RU' | 'EN'
  }) => {

  const topicType = DEFAULT_TOPICS_META.find(t => t[nativeLanguage] === topicName)?.type
  const systemPrompt = getSystemPromptNewQuestion(nativeLanguage, topicType)

  const topics = [currentTopic]
  if (greetingTopic) {
    topics.unshift(greetingTopic)
  }

  return chat([
    { role: Role.SYSTEM, content: systemPrompt },
    { role: Role.USER, content: convertTopicsToTextFormat(topics) },
  ])
}

export const generateFirstQuestionOfNewTopicFromChat = async ({ greetingTopic, topicName, nativeLanguage }: {
  greetingTopic: TopicModel
   topicName: string
    nativeLanguage: 'RU' | 'EN'
}) => {

  const topicType = DEFAULT_TOPICS_META.find(t => t[nativeLanguage] === topicName)?.type

  const systemPrompt = getSystemPromptNewTopic(nativeLanguage, topicName, topicType)
  return chat([
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