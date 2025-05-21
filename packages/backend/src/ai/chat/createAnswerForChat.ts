import { useChat } from '../adapters/aiClient'
import { createMessageChatPrompt } from './MESSAGE_CHAT_TEMPLATE'
import { Role } from '../adapters/gpt.types'
import prismaDb from '../../prisma/prismaDb'

const createAnswerForChat = async (chatId: number, message: string, language: 'RU' | 'EN' = 'EN') => {
  const msgPrompt = await createMessageChatPrompt(chatId, language)
  const msg = await useChat([
    {
      role: Role.SYSTEM,
      content: msgPrompt,
    },
    {
      role: Role.USER,
      content: message,
    },
  ])
  console.log('msg:', msg)

  const answer = msg.match(/<answer>(.*?)<\/answer>/)?.[1]?.trim()
  const emotion = msg.match(/<emotion>(.*?)<\/emotion>/)?.[1]?.trim() as string | null
  const emoji = msg.match(/<emoji>(.*?)<\/emoji>/)?.[1]?.trim() as string | null
  console.log('parsed:', {
    answer,
    emotion,
    emoji,
  })
  if (!answer) {
    return {
      answer: language === 'RU' ? 'Даже не знаю что сказать' : 'I don\'t know what to say',
      emotion: 'unknown',
      emoji: '🤷‍♂️',
    }
  }
  console.log('Question:', message)
  console.log('Answer:', answer)

  const messageIncome = await prismaDb.message.create({
    data: {
      chatId,
      content: message,
      authorIsReplicant: false,
      emotion: null,
      emoji: null,
    },
  })
  const messageOut = await prismaDb.message.create({
    data: {
      chatId,
      content: answer,
      authorIsReplicant: true,
      emotion,
      emoji,
    },
  })

  return [messageIncome, messageOut]
}

export default createAnswerForChat