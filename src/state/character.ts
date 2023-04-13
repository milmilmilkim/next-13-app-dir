import { Character } from '@/types/data/character';
import { atomWithStorage } from 'jotai/utils';

const charactersAtom = atomWithStorage<Character[]>('characters', []);

export { charactersAtom };
