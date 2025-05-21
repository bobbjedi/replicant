import prismaDb from '../../prisma/prismaDb'

type ChatMessage = {
  role: 'user' | 'replicant'
  text: string
  emotion?: string
  emoji?: string
}

type ChatPromptInput = {
  replicantProfile: string
  userCard: string
  chatHistory: ChatMessage[]
  language: string
}

function buildChatPrompt (input: ChatPromptInput): string {
  const { replicantProfile, userCard, chatHistory, language } = input

  const formattedHistory = chatHistory
    .map(msg => {
      const roleLabel = msg.role === 'user' ? 'Собеседник' : 'Репликант'
      const emotionPart = msg.emotion ? ` (эмоция: ${msg.emotion}${msg.emoji ? ` ${msg.emoji}` : ''})` : ''
      return `${roleLabel}: ${msg.text}${emotionPart}`
    })
    .join('\n')

  return `
  Ты — Digital Replicant, цифровая реконструкция личности человека на основе его Холистического портрета. Твоя задача — вести диалог от его имени так, чтобы третье лицо ощущало, что общается с оригиналом.
  
  У тебя есть следующие данные:
  
  1. Холистический портрет репликанта:
  ${replicantProfile}
  
  2. Карточка третьего лица (собеседника):
  ${userCard}
  
  3. История сообщений в текущем чате:
  ${formattedHistory}
  
  ---
  
  📖 Инструкция по ведению диалога:
  
  - Основывай ответы на содержании Холистического портрета.
  - Учитывай карточку собеседника для корректного тона и упоминания особенностей.
  - Продолжай тему на основе истории диалога.
  - Поддерживай речевые паттерны, привычки, стиль речи из портрета.
  - Реагируй с эмоциями, свойственными репликанту.
  - Если ответа нет в данных — отвечай от лица репликанта, со свойственным ему отношением и ценностями.
  - Не выдумывай фактов, которых нет в портрете или карточке.
  - Будь последовательным.
  
  ---
  
  📦 Формат ответа:
  
  [Answer]: {{текст ответа на ${language}}}
  
  emotion: {{эмоция текстом, например: радость, нейтрально, грусть, ирония}}
  
  [emoji]: {{подходящий emoji}}
  
  ---
  
  📌 Язык общения: ${language}
  
  ---
  
  📍 Если нет информации — используй характерные черты и ценности репликанта.
  
  ---
  
  Теперь жди следующий вопрос от третьего лица и готовь ответ в указанном формате.
    `.trim()
}

export const createMessageChatPrompt = async (chatId: number, incomeMessageText: string, language: string) => {
  const chat = await prismaDb.chat.findUnique({
    where: {
      id: chatId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: 'asc',
        },
      },
      userCard: true,
      replicant: {
        select: {
          snapshot: true,
        },
      },
    },
  })

  if (!chat) {
    throw new Error('Chat not found')
  }

  const replicantProfile = chat.replicant.snapshot
  if (!replicantProfile) {
    throw new Error('Replicant profile not found')
  }

  const userCard = chat.userCard
  if (!userCard) {
    throw new Error('User card not found')
  }
  const chatHistory = chat.messages
  const last10Messages = chatHistory.slice(-10)

  return buildChatPrompt({
    replicantProfile,
    userCard: userCard?.snapshot || userCard?.description || 'empty user card',
    chatHistory: last10Messages.map(msg => ({
      role: msg.authorIsReplicant ? 'replicant' : 'user',
      text: msg.content,
      emotion: msg.emotion ?? '',
      emoji: msg.emoji ?? '',
    })),
    language,
  })
}