interface Message {
  content: string;
  role: 'system' | 'user' | 'assistant';
}

export interface Prompt {
  messages: Message;
  temperature?: number;
  presencePenalty?: number;
  frequency_penalty?: number;
}

export interface GPTRequest extends Prompt {
  maxTokens?: number;
  user?: string;
}
