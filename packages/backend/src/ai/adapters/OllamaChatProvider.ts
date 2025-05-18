import axios from 'axios'
import * as dotenv from 'dotenv'
import { delay } from '../../../../shared/src/utils'
import { ChatProvider, Message, ChatOptions } from './gpt.types'

dotenv.config()

const BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434'
const DEFAULT_MODEL = process.env.OLLAMA_MODEL || 'llama3'

export class OllamaChatProvider implements ChatProvider {
  private queue: (() => Promise<void>)[] = []
  private isProcessing = false

  constructor () {
    console.info('Use OllamaChatProvider, model: ' + DEFAULT_MODEL)
  }

  async chat (messages: Message[], options: ChatOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const response = await axios.post(
            `${BASE_URL}/api/chat`,
            {
              model: options.model || DEFAULT_MODEL,
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