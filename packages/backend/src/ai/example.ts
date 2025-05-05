import { chat, Role } from './adapters/aiClient'

async function demo () {
  const response = await chat([
    { role: Role.SYSTEM, content: 'Ты — большая языковая модель.' },
    { role: Role.USER, content: 'Как дела?' },
  ])

  console.log('Ответ:', response)
}

demo()