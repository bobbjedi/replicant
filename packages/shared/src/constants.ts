import { EDefaultTopicType } from './types'

export const DEFAULT_TOPICS = [
  {
    RU: 'Знакомство',
    EN: 'Greeting',
    emoji: '👋',
    type: EDefaultTopicType.GREETING,
  },
  {
    RU: 'Лидеры мнений',
    EN: 'Opinion Leaders',
    emoji: '👤',
    type: EDefaultTopicType.OPINION_LEADERS,
  },
  {
    RU: 'Близкие люди',
    EN: 'Close Ones',
    emoji: '👥',
    type: EDefaultTopicType.CLOSE_ONES,
  },
]