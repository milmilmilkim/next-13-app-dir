interface Message {
  role: Role;
  content: string;
}

type Role = 'user' | 'system' | 'assistance';

export interface Choices {
  message: Message;
  finish_reason: string;
  index: number;
}
