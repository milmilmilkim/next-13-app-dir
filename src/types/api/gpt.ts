export interface Message {
  role: Role;
  content: string;
}

type Role = 'user' | 'system' | 'assistant';

export interface Choices {
  message: Message[];
  finish_reason: string;
  index: number;
}

export interface GPTRequest {
  messages: Message[];
  temperature?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  maxTokens?: number;
  user?: string;
  stop?: string;
}
