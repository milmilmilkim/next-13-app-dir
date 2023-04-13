import { atom } from 'jotai';
import { StoryRequestOptions } from '@/types/data/story';

const storyAtom = atom('');

const storyRequestOptionsAtom = atom<StoryRequestOptions>({
  temperature: 0.5,
  presencePenalty: 0,
  frequencyPenalty: 0,
  maxTokens: 50,
});

export { storyAtom, storyRequestOptionsAtom };
