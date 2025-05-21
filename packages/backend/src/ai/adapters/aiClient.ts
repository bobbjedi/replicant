import { ChatProvider, Message, ChatOptions } from './gpt.types'
import { delay } from '../../../../shared/src/utils'
import { countMessagesTokens } from '../utils'
import { createChatProvider } from './ChatProviderFactory'

interface RequestItem {
  messages: Message[]
  options: ChatOptions
  resolve: (value: string) => void
  reject: (reason?: any) => void
}

class ChatService {
  private provider: ChatProvider
  private queue: RequestItem[] = []
  private isProcessing = false

  constructor () {
    this.provider = createChatProvider()
  }

  public chat (messages: Message[], options: ChatOptions = {}): Promise<string> {
    console.log('Size:', countMessagesTokens(messages))
    // console.log('System:', messages[0])
    // console.log('User:', messages[1])

    return new Promise((resolve, reject) => {
      this.queue.push({ messages, options, resolve, reject })
      this.processQueue()
    })
  }

  private async processQueue () {
    if (this.isProcessing) { return }
    this.isProcessing = true

    while (this.queue.length > 0) {
      const item = this.queue.shift()
      if (!item) { continue }

      const { messages, options, resolve, reject } = item

      try {
        const answer = await this.provider.chat(messages, options)
        resolve(answer)
      } catch (error) {
        console.error('Ошибка при вызове chat provider:', error)
        reject(error)
      }

      // Пауза между запросами, чтобы не перегружать API
      await delay(1100)
    }

    this.isProcessing = false
  }
}

const chatService = new ChatService()

export function chat (messages: Message[], options: ChatOptions = {}): Promise<string> {
  return chatService.chat(messages, options)
}