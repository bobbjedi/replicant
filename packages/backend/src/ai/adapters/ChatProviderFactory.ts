import { OpenAIChatProvider } from './OpenAIChatProvider'
import { OllamaChatProvider } from './OllamaChatProvider'
import * as dotenv from 'dotenv'
import { ChatProvider } from './gpt.types'

dotenv.config()

export function createChatProvider (): ChatProvider {
  const type = process.env.USE_API_TYPE || 'OPEN_AI'

  if (type === 'OPEN_AI') {
    return new OpenAIChatProvider()
  }
  if (type === 'OLLAMA') {
    return new OllamaChatProvider()
  }

  throw new Error(`Неизвестный USE_API_TYPE: ${type}`)
}