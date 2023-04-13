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
  temperature?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  maxTokens?: number;
  user?: string;
  stop?: string;
}
