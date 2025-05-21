import { encoding_for_model, TiktokenModel } from 'tiktoken'

export function countMessagesTokens (messages: { role: string, content: string }[], model: TiktokenModel = 'gpt-4' as TiktokenModel) {
  const encoding = encoding_for_model(model)

  let tokensCount = 0

  for (const message of messages) {
    tokensCount += 4
    tokensCount += encoding.encode(message.content).length
  }

  // +2 tokens for assistant answer
  tokensCount += 2

  return tokensCount
}