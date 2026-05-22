import { EMainTopicType } from '@shared/types'
import { TOPIC_PROMPT_PARTS, CUSTOM_TOPIC_PROMPT_TEMPLATE, INTERVIEWER_ROLE_PARTS, COMMON_PROMPT_PARTS, LANG_PART } from './prompts/NEW_QUESTION_TEMPLATES'

const languageMapper = {
  RU: 'russian',
  EN: 'english',
}

export const buildPromptForTopic = (topicName: string, topicType: EMainTopicType, lang: 'RU' | 'EN') => {
  const isMainTopic = !!topicType
  const langKey = languageMapper[lang] || 'english'

  const specificPart = isMainTopic
    ? TOPIC_PROMPT_PARTS[topicType]
    : CUSTOM_TOPIC_PROMPT_TEMPLATE(topicName)

  return `${INTERVIEWER_ROLE_PARTS[langKey]}
    ${COMMON_PROMPT_PARTS[langKey]}
    ${specificPart}
    ${LANG_PART(langKey)}`
}
