import axios, { AxiosError } from 'axios'
import { ChatProvider, ChatProviderConfig, Message, ChatOptions } from './gpt.types'
import { delay } from '@shared/utils'

export class OpenAIChatProvider implements ChatProvider {
  private config: ChatProviderConfig
  private queue: (() => Promise<void>)[] = []
  private isProcessing = false

  constructor (config: ChatProviderConfig) {
    this.config = config
    console.info(`Use OpenAIChatProvider (OpenAI-compatible), baseUrl: ${config.baseUrl}, model: ${config.defaultModel}`)
  }

  async chat (messages: Message[], options: ChatOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const response = await axios.post(
            `${this.config.baseUrl}/chat/completions`,
            {
              model: options.model || this.config.defaultModel,
              messages,
              temperature: options.temperature || 0.7,
            },
            {
              headers: {
                Authorization: `Bearer ${this.config.apiKey}`,
                'Content-Type': 'application/json',
                ...options.headers,
              },
            },
          )

          const answer = response.data.choices[0].message.content
          resolve(answer)
        } catch (error) {
          if (error instanceof AxiosError) {
            reject(error.response?.data)
          } else {
            reject(error)
          }
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