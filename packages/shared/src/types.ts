export type User = {
    id: string;
    name: string;
  };

import type { Replicant, Interview, InterviewTopic, Question } from '../../backend/src/prisma/client/index'

export type ReplicantModel = Replicant
export type InterviewModel = Interview
export type TopicModel = InterviewTopic
export type QuestionModel = Question

export enum EDefaultTopicType {
  GREETING = 'GREETING',
  CLOSE_ONES = 'CLOSE_ONES',
  OPINION_LEADERS = 'OPINION_LEADERS',
  CHILDHOOD_MEMORIES = 'CHILDHOOD_MEMORIES',
  EDUCATION = 'EDUCATION',
  WORK_AND_CAREER = 'WORK_AND_CAREER',
  RELIGION = 'RELIGION',
  POLITICS = 'POLITICS',
  VALUES_AND_MORALITY = 'VALUES_AND_MORALITY',
  FEARS_AND_CONCERNS = 'FEARS_AND_CONCERNS',
  HOBBIES_AND_INTERESTS = 'HOBBIES_AND_INTERESTS',
  TECHNOLOGY_ATTITUDE = 'TECHNOLOGY_ATTITUDE',
  LIFE_PRINCIPLES = 'LIFE_PRINCIPLES',
  LIFE_EVENTS = 'LIFE_EVENTS',
}