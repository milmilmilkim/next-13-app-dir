// type StoryType = 'scenario' | 'novel';

import { Character } from '@/types/data/character';

export interface StoryRequest {
  //   storyType: StoryType;
  //   worldView: string;
  characters: Character[];
  context?: string;
  options?: StoryRequestOptions;
}

interface StoryRequestOptions {
  temperature?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  maxTokens?: number;
  user?: string;
  stop?: string;
}
