import prismaDb from '@backend/prisma/prismaDb'
import t from './trcpInstance'
import { z } from 'zod'

const getReplicantUserCards = t.procedure.query(() => {
  return prismaDb.userCard.findMany()
})

const getReplicantChats = t.procedure
  .input(z.object({ repId: z.number() }))
  .query(async ({ input }) => {
    return prismaDb.chat.findMany({
      where: {
        replicantId: input.repId,
      },
      include: {
        userCard: true,
        messages: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  })

const getMessagesByChatId = t.procedure
  .input(z.object({
    chatId: z.number(),
    page: z.number().default(1),
    limit: z.number().default(20),
  }))
  .query(async ({ input }) => {
    const skip = (input.page - 1) * input.limit
    return prismaDb.message.findMany({
      where: { chatId: input.chatId },
      orderBy: { createdAt: 'desc' },
      skip,
      take: input.limit,
    })
  })

const createReplicantUserCard = t.procedure
  .input(z.object({
    repId: z.number(),
    name: z.string(),
    description: z.string(),
    role: z.string().optional(),
  }))
  .mutation(async ({ input }) => {
    return prismaDb.userCard.create({
      data: {
        replicantId: input.repId,
        name: input.name,
        description: input.description,
        role: input.role,
      },
    })
  })

const createReplicantChat = t.procedure
  .input(z.object({
    repId: z.number(),
    userCardId: z.number().optional(),
  }))
  .mutation(async ({ input }) => {
    return prismaDb.chat.create({
      data: {
        replicantId: input.repId,
        userCardId: input.userCardId,
      },
    })
  })

export const chatService = {
  getReplicantUserCards,
  getReplicantChats,
  getMessagesByChatId,
  createReplicantUserCard,
  createReplicantChat,
}