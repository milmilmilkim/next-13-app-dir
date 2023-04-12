import { atom } from 'jotai';
import { StoryRequest } from '@/types/data/story';

const storyAtom = atom<string>('');

const storyIdAtom = atom<string>('');

const storyRequestAtom = atom<StoryRequest>({
  characters: [],
  context: '',
  options: {
    temperature: 0.5,
    presencePenalty: 0,
    frequencyPenalty: 0,
    maxTokens: 50,
  },
});

export { storyAtom, storyRequestAtom, storyIdAtom };
