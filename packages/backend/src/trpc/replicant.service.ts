import prismaDb from '../prisma/prismaDb'
import { ReplicantModel } from '../../../shared/src/types'
import { z } from 'zod'
import t from './trcpInstance'

export const createReplicant = t.procedure
  .input(z.object({ name: z.string(), description: z.string() }))
  .mutation(async ({ input }): Promise<ReplicantModel> => {
    const replicant = await prismaDb.replicant.create({
      data: {
        name: input.name,
        description: input.description || null,
        interview: {
          create: { },
        },
      },
    })
    return replicant
  })

export const getReplicantsList = t.procedure.query(() => {
  return prismaDb.replicant.findMany() as Promise<ReplicantModel[]>
})