'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import axios from '@/api/axios';
import { storyRequestOptionsAtom } from '@/state/story';
import { charactersAtom } from '@/state/character';
import StoryArea from '@/components/story/StoryArea';
import tw from 'tailwind-styled-components';

const Story = () => {
  const [storyRequestOptions, setStoryRequestOptions] = useAtom(storyRequestOptionsAtom);
  const [characters] = useAtom(charactersAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [context, setContext] = useState('');

  const start = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post('/api/gpt/story', {
        characters: characters.map((character) => {
          const { id, ...rest } = character;
          return rest;
        }),
        context,
        options: storyRequestOptions,
      });

      console.log(data);

      setContext((context) => {
        const next: string = data[0].message.content;
        console.log(next);
        return context + next;
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Story Generator</h1>
      <p>입력하는 모든 데이터는 openai로만 전송됩니다. 별도로 제가 저장하지 않습니다.</p>
      <Styledbutton onClick={start} disabled={isLoading}>
        start!
      </Styledbutton>
      <Styledbutton>cancel!</Styledbutton>
      <Styledbutton>reset!</Styledbutton>
      <StoryArea story={context} isLoading={false} error={false} />
      <Styledbutton>next!</Styledbutton>
    </div>
  );
};

export default Story;

const Styledbutton = tw.button`
nes-btn 
${(props) => (props.disabled ? 'is-disabled' : 'is-primary')}
`;
