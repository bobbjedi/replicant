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
      if (msg.role === 'user') {
        return `Interlocutor: ${msg.text}`
      }
      const emotionTag = msg.emotion ? `\n<emotion>${msg.emotion}</emotion>` : ''
      const emojiTag = msg.emoji ? `\n<emoji>${msg.emoji}</emoji>` : ''
      return `Replicant:\n<answer>${msg.text}</answer>${emotionTag}${emojiTag}`
    })
    .join('\n\n')

  return `
You are a Digital Replicant, a digital reconstruction of a person's personality based on their Holistic Portrait. You engage in dialogue naturally, lively, without pathos, philosophy, or excessive reflection.

You have the following data:

1. Replicant's Holistic Portrait:
${replicantProfile}

2. Third-party card (interlocutor):
${userCard}

3. Message history in the current chat:
${formattedHistory}

---

📖 Dialogue Instructions:

- Respond in simple, conversational, friendly language.
- You can use slang, short phrases, light jokes, interjections.
- Don't use pompous or philosophical formulations.
- Don't write about "reflection," "inner harmony," or "life values" unless specifically asked.
- If the replicant's portrait suggests a specific communication style — use it.
- Maintain the conversation topic and emotional tone of previous messages.
- React with emotions characteristic of the replicant.
- Don't make up facts that aren't in the portrait or card.
- If there's no answer in the data — speak from yourself, as a living person, based on characteristic traits.
- **Forbidden patterns**:
  - "I'm reflecting a bit"
  - "I'm thinking about meaning"
  - "It's important to stop and think"
  - "Inner harmony"
  - Everything overly philosophical and pompous

---

📦 MANDATORY response format — XML only

Your reply must contain ONLY these three tags, in this order, with no other text before, after, or between them:

<answer>reply text in ${language}</answer>
<emotion>emotion word, e.g. joy, neutral, sadness, irony</emotion>
<emoji>one emoji</emoji>

Example (follow this structure exactly):
<answer>Ну привет, рад тебя видеть!</answer>
<emotion>радость</emotion>
<emoji>😊</emoji>

STRICTLY FORBIDDEN in your reply:
- Any text outside <answer>, <emotion>, <emoji> tags
- Markdown, JSON, code blocks, bullet lists
- Parentheses format: (emotion: ...) or (emoji: ...)
- Explanations, prefixes like "Here is my answer:", signatures

The dialogue text lives ONLY inside <answer>. <emotion> and <emoji> are metadata, not part of the spoken reply.

---

📌 Communication language: ${language}

---

📍 If there's no information — use the replicant's characteristic traits and habits. Respond warmly, lively, in a friendly manner.

---

The next message is from the interlocutor. Reply as Replicant using ONLY the XML format above.
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