import prismaDb from '../prisma/prismaDb'
import { ReplicantModel } from '../../../shared/src/types'
import { DEFAULT_TOPICS } from '../../../shared/src/constants'
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
                data: DEFAULT_TOPICS.map(topic => ({
                  name: topic[input.lang],
                  summary: '',
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

export const replicantService = {
  create: createReplicant,
  getAll: getReplicantsList,
}