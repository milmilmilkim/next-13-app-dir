'use client';

import { ChangeEvent, useState } from 'react';
import instance from '@/api/axios';

const Story = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [story, setStory] = useState('');
  const [character, setCharacter] = useState('');

  const getResponse = async () => {
    try {
      setIsLoading(true);
      setStory('');
      const { data } = await instance.post('/api/gpt/story', {
        character,
      });
      const text = data[0].message.content;
      setStory(text);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getNext = async () => {
    try {
      setIsLoading(true);
      const { data } = await instance.post('/api/gpt/story', {
        context: `you: ${story}`,
      });
      const text = data[0].message.content;
      setStory((story) => story + text);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onCharacterChange = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLTextAreaElement;
    setCharacter(target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Story Generator</h1>

      <textarea className="w-full border" onChange={onCharacterChange}></textarea>

      <button disabled={isLoading} onClick={getResponse} className="bg-pink-500 border rounded-md text-white px-2 py-1">
        start!
      </button>

      {isLoading && <div>로딩중...(아주 오래걸림)</div>}
      <div style={{ whiteSpace: 'pre-wrap' }}>{story}</div>

      <button disabled={isLoading} onClick={getNext} className="bg-pink-500 border rounded-md text-white px-2 py-1">
        next!
      </button>
    </div>
  );
};

export default Story;
