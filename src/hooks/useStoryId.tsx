import { storyIdAtom } from '@/state/story';
import { useAtom } from 'jotai';

import { v4 as uuidv4 } from 'uuid';

const useStoryId = () => {
  const [storyId, setStoryId] = useAtom(storyIdAtom);

  const generateStoryId = () => {
    setStoryId(uuidv4());
  };

  return { storyId, generateStoryId };
};

export default useStoryId;
