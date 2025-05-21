import onNewMessage from '../ai/chat/createAnswerForChat'
import prismaDb from '../prisma/prismaDb'
import t from './trcpInstance'
import { z } from 'zod'

const getReplicantUserCards = t.procedure
  .input(z.object({ repId: z.number() }))
  .query(async ({ input }) => {
    return prismaDb.userCard.findMany({
      where: {
        replicantId: input.repId,
      },
    })
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

const getChatById = t.procedure
  .input(z.object({
    chatId: z.number(),
  }))
  .query(async ({ input }) => {
    return prismaDb.chat.findUnique({ where: { id: input.chatId } })
  })

const getMessagesByChatId = t.procedure
  .input(z.object({
    chatId: z.number(),
    beforeId: z.number().default(10000000000000000),
    count: z.number().default(20),
  }))
  .query(async ({ input }) => {
    return prismaDb.message.findMany({
      where: {
        chatId: input.chatId,
        id: {
          lt: input.beforeId,
        },
      },
      orderBy: { createdAt: 'desc' },
      take: input.count,
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
        role: input.role || null,
      },
    })
  })

const createReplicantChat = t.procedure
  .input(z.object({
    repId: z.number(),
    userCardId: z.number(),
    description: z.string(),
  }))
  .mutation(async ({ input }) => {
    return prismaDb.chat.create({
      data: {
        replicantId: input.repId,
        userCardId: input.userCardId,
        description: input.description,
      },
    })
  })

const sendMessage = t.procedure
  .input(z.object({
    chatId: z.number(),
    content: z.string(),
    lang: z.enum(['RU', 'EN']),
  }))
  .mutation(async ({ input }) => {
    console.log('sendMessage:', input)
    const answer = await onNewMessage(input.chatId, input.content, input.lang)
    console.log('answer:', answer)
    return answer
  })

const deleteChat = t.procedure
  .input(z.object({
    repId: z.number(),
    chatId: z.number(),
  }))
  .mutation(async ({ input }) => {
    return prismaDb.chat.delete({ where: { id: input.chatId, replicantId: input.repId } })
  })

export const chatService = {
  getReplicantUserCards,
  getReplicantChats,
  getChatById,
  getMessagesByChatId,
  createReplicantUserCard,
  createReplicantChat,
  sendMessage,
  deleteChat,
}