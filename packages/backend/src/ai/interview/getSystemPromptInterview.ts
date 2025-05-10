import { EMainTopicType } from '../../../../shared/src/types'
import { TOPIC_PROMPT_PARTS, CUSTOM_TOPIC_PROMPT_TEMPLATE, INTERVIEWER_ROLE_PART, COMMON_PROMPT_PART, LANG_PART } from './prompts/NEW_QUESTION_TEMPLATES'

const languageMapper = {
  RU: 'russian',
  EN: 'english',
}

export const buildPromptForTopic = (topicName: string, topicType: EMainTopicType, lang: 'RU' | 'EN') => {
  const isMainTopic = !!topicType

  const specificPart = isMainTopic
    ? TOPIC_PROMPT_PARTS[topicType]
    : CUSTOM_TOPIC_PROMPT_TEMPLATE(topicName)

  return `${INTERVIEWER_ROLE_PART}
    ${COMMON_PROMPT_PART}
    ${specificPart}
    ${LANG_PART(languageMapper[lang] || lang)}`
}