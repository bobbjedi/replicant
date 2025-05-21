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
  GREETING = 'GREETING', // Greeting, setting contact
  CLOSE_ONES = 'CLOSE_ONES', // People from the immediate environment, close relationships
  CHILDHOOD_MEMORIES = 'CHILDHOOD_MEMORIES', // Childhood memories, forming personality
  EDUCATION = 'EDUCATION', // Education, personal development
  WORK_AND_CAREER = 'WORK_AND_CAREER', // Career, professional achievements
  HOBBIES_AND_INTERESTS = 'HOBBIES_AND_INTERESTS', // Hobbies and interests
  LIFE_EVENTS = 'LIFE_EVENTS', // Important life events, experience
  TECHNOLOGY_ATTITUDE = 'TECHNOLOGY_ATTITUDE', // Attitude to technologies, innovations
  OPINION_LEADERS = 'OPINION_LEADERS', // Influence of authorities, opinion leaders
  RELIGION = 'RELIGION', // Religious views
  POLITICS = 'POLITICS', // Political views
  VALUES_AND_MORALITY = 'VALUES_AND_MORALITY', // Moral and ethical beliefs
  FEARS_AND_CONCERNS = 'FEARS_AND_CONCERNS', // Fears and concerns
  LIFE_PRINCIPLES = 'LIFE_PRINCIPLES', // Life principles and philosophy
  PLACES_AND_TRAVEL = 'PLACES_AND_TRAVEL', // Places, cities, travel and relocation, emotional attitude to them
}