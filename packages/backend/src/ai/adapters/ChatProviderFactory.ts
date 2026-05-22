import { OpenAIChatProvider } from './OpenAIChatProvider'
import { OllamaChatProvider } from './OllamaChatProvider'
import * as dotenv from 'dotenv'
import { ChatProvider, ChatProviderConfig } from './gpt.types'

dotenv.config()

export function createChatProvider (): ChatProvider {
  const type = process.env.USE_API_TYPE || 'OPEN_AI'

  if (type === 'OPEN_AI') {
    return new OpenAIChatProvider({
      apiKey: process.env.OPENAI_API_KEY || '',
      baseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
      defaultModel: process.env.OPENAI_API_MODEL || 'gpt-4o-mini',
    } satisfies ChatProviderConfig)
  }

  if (type === 'DEEPSEEK') {
    return new OpenAIChatProvider({
      apiKey: process.env.DEEPSEEK_API_KEY || '',
      baseUrl: process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1',
      defaultModel: process.env.DEEPSEEK_API_MODEL || 'deepseek-chat',
    } satisfies ChatProviderConfig)
  }

  if (type === 'OLLAMA') {
    return new OllamaChatProvider({
      apiKey: '', // не используется Ollama
      baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
      defaultModel: process.env.OLLAMA_MODEL || 'llama3',
    } satisfies ChatProviderConfig)
  }

  throw new Error(`Неизвестный USE_API_TYPE: ${type}`)
}