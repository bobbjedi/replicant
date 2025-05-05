import { PrismaClient, Replicant, Interview, Snapshot, Question } from './client' // Путь, соответствующий твоей структуре проекта

export default new PrismaClient()

export type ReplicantModel = Replicant
export type InterviewModel = Interview
export type SnapshotModel = Snapshot
export type QuestionModel = Question