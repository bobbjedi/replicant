import { chat, Role } from './adapters/aiClient'

async function main () {
  const messages = [
    { role: Role.SYSTEM, content: 'Ты — большая языковая модель. Отвечай на вопросы пользователя.' },
    { role: Role.USER, content: 'Как дела?' },
  ]

  try {
    const response = await chat(messages)
    console.log('Ответ от модели:', response)
  } catch (error) {
    console.error('Произошла ошибка:', error)
  }
}

main()