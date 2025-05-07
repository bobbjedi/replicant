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
  OPINION_LEADERS = 'OPINION_LEADERS',
  CLOSE_ONES = 'CLOSE_ONES',
}