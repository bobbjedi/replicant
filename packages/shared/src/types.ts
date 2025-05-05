export type User = {
    id: string;
    name: string;
  };

import type { Replicant, Interview, Snapshot, Question } from '../../backend/src/prisma/client/index'

export type ReplicantModel = Replicant
export type InterviewModel = Interview
export type SnapshotModel = Snapshot
export type QuestionModel = Question