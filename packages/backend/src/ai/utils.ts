import { encoding_for_model, TiktokenModel } from 'tiktoken'

export function countMessagesTokens (messages: { role: string, content: string }[], model: TiktokenModel = 'gpt-4' as TiktokenModel) {
  const encoding = encoding_for_model(model)

  let tokensCount = 0

  for (const message of messages) {
    // +4 токена на роль и спец-токены для каждого сообщения
    tokensCount += 4
    // токены в контенте
    tokensCount += encoding.encode(message.content).length
  }

  // +2 токена на assistant ответ
  tokensCount += 2

  return tokensCount
}