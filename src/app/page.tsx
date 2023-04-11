'use client';

import { useAtom } from 'jotai';
import { storyAtom } from '@/state/story';
export default function Home() {
  const [story] = useAtom(storyAtom);

  return (
    <>
      <h2>recent story...</h2>
      <div>
        <span>{story.slice(0, 100)}</span>
      </div>
    </>
  );
}
