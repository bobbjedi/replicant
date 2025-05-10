import prismaDb from '../prisma/prismaDb'
import { ReplicantModel } from '../../../shared/src/types'
import { DEFAULT_TOPICS_META } from '../../../shared/src/constants'
import { z } from 'zod'
import t from './trcpInstance'

const createReplicant = t.procedure
  .input(
    z.object({
      name: z.string(),
      description: z.string(),
      lang: z.enum(['RU', 'EN']),
    }))
  .mutation(async ({ input }): Promise<ReplicantModel> => {

    const replicant = await prismaDb.replicant.create({
      data: {
        name: input.name,
        description: input.description || null,
        snapshot: '',
        interview: {
          create: {
            summary: '',
            topics: {
              createMany: {
                data: DEFAULT_TOPICS_META.map(topic => ({
                  name: topic[input.lang],
                  summary: '',
                  type: topic.type || null,
                })),
              },
            },
          },
        },
      },
    })
    return replicant
  })

const getReplicantsList = t.procedure.query(() => {
  return prismaDb.replicant.findMany() as Promise<ReplicantModel[]>
})

const getReplicantById = t.procedure
  .input(z.object({ id: z.number() }))
  .query(async ({ input }) => {
    return prismaDb.replicant.findFirst({
      where: {
        id: input.id,
      },
    })
  })

const getInterviewByReplicantId = t.procedure
  .input(z.object({ id: z.number() }))
  .query(async ({ input }) => {
    return prismaDb.interview.findFirst({
      where: {
        replicantId: input.id,
      },
    })
  })

export const replicantService = {
  get: getReplicantById,
  create: createReplicant,
  getAll: getReplicantsList,
  getInterview: getInterviewByReplicantId,
}