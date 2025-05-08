import { DEFAULT_TOPICS_META } from '../../../shared/src/constants'
import { QuestionModel } from '../../../shared/src/types'
import { chat, Role } from './adapters/aiClient'
import { getSystemPromptNewQuestion, getSystemPromptNewTopic } from './getSystemPrompt'

export const generateNextQuestionByQuestionsListFromChat = ({ greetingQuestions, currentTopicQuestions, nativeLanguage, topicName }: {
  greetingQuestions: QuestionModel[]
  currentTopicQuestions: QuestionModel[]
  topicName: string
  nativeLanguage: 'RU' | 'EN'
  }) => {

  const questions = [
    ...greetingQuestions.sort((q1, q2) => q1.id - q2.id).slice(0, 3),
    ...currentTopicQuestions.sort((q1, q2) => q1.id - q2.id),
  ]

  const topicType = DEFAULT_TOPICS_META.find(t => t[nativeLanguage] === topicName)?.type
  const systemPrompt = getSystemPromptNewQuestion(nativeLanguage, topicType)

  return chat([
    { role: Role.SYSTEM, content: systemPrompt },
    { role: Role.USER, content: JSON.stringify(questions.map(questionToPromptFormat)) },
  ])
}

export const generateFirstQuestionOfNewTopicFromChat = async ({ greetingQuestions, topicName, nativeLanguage }: {
  greetingQuestions: QuestionModel[]
   topicName: string
    nativeLanguage: 'RU' | 'EN'
}) => {

  const topicType = DEFAULT_TOPICS_META.find(t => t[nativeLanguage] === topicName)?.type

  const systemPrompt = getSystemPromptNewTopic(nativeLanguage, topicName, topicType)
  return chat([
    { role: Role.SYSTEM, content: systemPrompt },
    { role: Role.USER, content: JSON.stringify(greetingQuestions.sort((q1, q2) => q1.id - q2.id).map(questionToPromptFormat)) },
  ])
}
const questionToPromptFormat = (q: QuestionModel) => ({
  question: q.questionText,
  answer: q.answerText,
  emotion: q.emotion,
  date: q.createdAt,
})