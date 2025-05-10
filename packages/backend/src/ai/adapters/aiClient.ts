import axios, { AxiosError } from 'axios'
import * as dotenv from 'dotenv'
import { delay } from '../../../../shared/src/utils'
import { countMessagesTokens } from '../utils'

dotenv.config()

const API_KEY = process.env.OPENAI_API_KEY
const BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'

if (!API_KEY) {
  throw new Error('API ключ не найден. Убедитесь, что переменная OPENAI_API_KEY установлена в .env файле.')
}

export enum Role {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system',
}

interface Message {
  role: Role;
  content: string;
}

interface ChatOptions {
  model?: string;
  temperature?: number;
  headers?: Record<string, string>;
}

interface RequestItem {
  messages: Message[];
  options: ChatOptions;
  resolve: (value: string) => void;
  reject: (reason?: any) => void;
}

const queue: RequestItem[] = []
let isProcessing = false

async function processQueue () {
  if (isProcessing) { return }
  isProcessing = true

  while (queue.length > 0) {
    const item = queue.shift()
    if (!item) { continue }

    const {
      messages,
      options: {
        // model = 'google/gemini-2.5-flash-pre', // дешевая большой контекст
        model = 'openai/gpt-4o-mini', // дешевле
        // model = 'openai/gpt-4.1-mini', // дороже
        temperature = 0.7,
        headers = {},
      },
      resolve,
      reject,
    } = item

    try {
      const response = await axios.post(
        `${BASE_URL}/chat/completions`,
        {
          model,
          messages,
          temperature,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            ...headers,
          },
        },
      )

      const answer = response.data.choices[0].message.content
      resolve(answer)
    } catch (error) {
      const axiosError = error as AxiosError
      console.error(
        'Ошибка при обращении к API:',
        axiosError.response ? axiosError.response.data : axiosError.message,
      )
      reject(error)
    }

    await delay(1100) // пауза между запросами
  }

  isProcessing = false
}

export function chat (
  messages: Message[],
  options: ChatOptions = {},
): Promise<string> {
  console.log('Size:', countMessagesTokens(messages))
  console.log('System:', messages[0])
  console.log('User:', messages[1])
  return new Promise((resolve, reject) => {
    queue.push({ messages, options, resolve, reject })
    processQueue()
  })
}