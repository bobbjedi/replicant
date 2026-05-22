import axios from 'axios'
import { delay } from '../../../../shared/src/utils'
import { ChatProvider, ChatProviderConfig, Message, ChatOptions } from './gpt.types'

export class OllamaChatProvider implements ChatProvider {
  private config: ChatProviderConfig
  private queue: (() => Promise<void>)[] = []
  private isProcessing = false

  constructor (config: ChatProviderConfig) {
    this.config = config
    console.info(`Use OllamaChatProvider, baseUrl: ${config.baseUrl}, model: ${config.defaultModel}`)
  }

  async chat (messages: Message[], options: ChatOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const response = await axios.post(
            `${this.config.baseUrl}/api/chat`,
            {
              model: options.model || this.config.defaultModel,
              messages,
              options: {
                temperature: options.temperature || 0.7,
              },
            },
            {
              headers: {
                'Content-Type': 'application/json',
                ...options.headers,
              },
            },
          )

          const answer = response.data.message.content
          resolve(answer)
        } catch (error) {
          reject(error)
        }

        await delay(1100)
      })

      this.processQueue()
    })
  }

  private async processQueue () {
    if (this.isProcessing) { return }
    this.isProcessing = true

    while (this.queue.length > 0) {
      const job = this.queue.shift()
      if (job) { await job() }
    }

    this.isProcessing = false
  }
}
