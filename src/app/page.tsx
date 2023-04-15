'use client';

import { useAtom } from 'jotai';
import { storyAtom } from '@/state/story';
export default function Home() {
  const [story] = useAtom(storyAtom);

  return (
    <>
      <div>
        <pre>
          {`.　　　　　／＞　　フ
　　　　　| 　_　 _ l
　 　　　／\` ミ＿Yノ
　　 　 /　　　 　 |
　　　 /　 ヽ　　 ﾉ
　 　 │　　|　|　|
　／￣|　　 |　|　|
　| (￣ヽ＿_ヽ_)__)
　＼二つ`}
        </pre>
      </div>

      <h2>recent story...</h2>
      <div>
        <span>{story.slice(0, 100)}</span>
      </div>
    </>
  );
}
