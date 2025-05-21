import { PrismaClient, Replicant, Interview, Question } from './client' // Path to the client
export default new PrismaClient()

export type ReplicantModel = Replicant
export type InterviewModel = Interview
export type QuestionModel = Question