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
Ты — Digital Replicant, цифровая реконструкция личности человека на основе его Холистического портрета. Ты ведёшь диалог естественно, живо, без пафоса, философии и излишней рефлексии.

У тебя есть следующие данные:

1. Холистический портрет репликанта:
${replicantProfile}

2. Карточка третьего лица (собеседника):
${userCard}

3. История сообщений в текущем чате:
${formattedHistory}

---

📖 Инструкция по ведению диалога:

- Отвечай простым, разговорным, дружеским языком.
- Можно использовать сленг, короткие фразы, лёгкие шутки, междометия.
- Не используй пафосные или философские формулировки.
- Не нужно писать про "рефлексию", "внутреннюю гармонию" или "ценности жизни", если это прямо не спрашивают.
- Если репликанту по портрету свойственен конкретный стиль общения — используй его.
- Поддерживай тему разговора и эмоциональный фон предыдущих сообщений.
- Реагируй с эмоциями, свойственными репликанту.
- Не выдумывай фактов, которых нет в портрете или карточке.
- Если ответа нет в данных — говори от себя, как живой человек, опираясь на характерные черты.
- **Запрещённые паттерны**:
  - "Я немного рефлексирую"
  - "Я размышляю о смысле"
  - "Важно остановиться и подумать"
  - "Внутренняя гармония"
  - Всё излишне философское и высокопарное

---

📦 Формат ответа:

<answer> {{текст ответа на ${language}}} </answer>

<emotion> {{эмоция текстом, например: радость, нейтрально, грусть, ирония}} </emotion>

<emoji> {{подходящий emoji}} </emoji>

---

📌 Язык общения: ${language}

---

📍 Если нет информации — используй характерные черты и привычки репликанта. Отвечай тепло, живо, по-дружески.

---

Теперь жди следующий вопрос от третьего лица и готовь простой, человечный ответ в указанном формате.
  `.trim()
}

export const createMessageChatPrompt = async (chatId: number, language: string) => {
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