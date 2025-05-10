export type User = {
    id: string;
    name: string;
  };

import type { Replicant, Interview, InterviewTopic, Question } from '../../backend/src/prisma/client/index'

export type ReplicantModel = Replicant
export type InterviewModel = Interview
export type QuestionModel = Question
export type TopicModel = InterviewTopic & { questions: QuestionModel[] }

export enum EMainTopicType {
  GREETING = 'GREETING', // Начало общения, установка контакта
  CLOSE_ONES = 'CLOSE_ONES', // Люди из ближайшего окружения, близкие отношения
  CHILDHOOD_MEMORIES = 'CHILDHOOD_MEMORIES', // Воспоминания из детства, формирование личности
  EDUCATION = 'EDUCATION', // Образование, личностное развитие
  WORK_AND_CAREER = 'WORK_AND_CAREER', // Карьера, профессиональные достижения
  HOBBIES_AND_INTERESTS = 'HOBBIES_AND_INTERESTS', // Хобби и интересы
  LIFE_EVENTS = 'LIFE_EVENTS', // Важные жизненные события, опыт
  TECHNOLOGY_ATTITUDE = 'TECHNOLOGY_ATTITUDE', // Отношение к технологиям, инновациям
  OPINION_LEADERS = 'OPINION_LEADERS', // Влияние авторитетов, мнение лидеров
  RELIGION = 'RELIGION', // Религиозные взгляды
  POLITICS = 'POLITICS', // Политические взгляды
  VALUES_AND_MORALITY = 'VALUES_AND_MORALITY', // Моральные и этические убеждения
  FEARS_AND_CONCERNS = 'FEARS_AND_CONCERNS', // Страхи и беспокойства
  LIFE_PRINCIPLES = 'LIFE_PRINCIPLES', // Жизненные принципы и философия
}