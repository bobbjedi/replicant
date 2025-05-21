import axios, { AxiosError } from 'axios'
import { ChatProvider, Message, ChatOptions } from './gpt.types'
import * as dotenv from 'dotenv'
import { delay } from '../../../../shared/src/utils'

dotenv.config()

const API_KEY = process.env.OPENAI_API_KEY
const BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'
const DEFAULT_MODEL = process.env.OPENAI_API_MODEL || 'gpt-4o-mini'

export class OpenAIChatProvider implements ChatProvider {
  private queue: (() => Promise<void>)[] = []
  private isProcessing = false

  constructor () {
    console.info('Use OpenAIChatProvider, model: ' + DEFAULT_MODEL)
  }
  async chat (messages: Message[], options: ChatOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
              model: options.model || DEFAULT_MODEL,
              messages,
              temperature: options.temperature || 0.7,
            },
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
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