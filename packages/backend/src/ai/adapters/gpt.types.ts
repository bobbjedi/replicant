export enum Role {
    USER = 'user',
    ASSISTANT = 'assistant',
    SYSTEM = 'system',
  }

export interface Message {
    role: Role;
    content: string;
  }

export interface ChatOptions {
    model?: string;
    temperature?: number;
    headers?: Record<string, string>;
  }

export interface ChatProviderConfig {
    apiKey: string
    baseUrl: string
    defaultModel: string
  }

export interface ChatProvider {
    chat(messages: Message[], options?: ChatOptions): Promise<string>
  }