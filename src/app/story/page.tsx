'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { characterAtom } from '@/state/character';
import { storyAtom } from '@/state/story';
import useStory from '@/queries/story/useCreateStory';
import StoryArea from '@/components/story/StoryArea';
import { useQueryClient } from '@tanstack/react-query';

import tw from 'tailwind-styled-components';

const Story = () => {
  const [context, setContext] = useState('');
  const [character, setCharacter] = useAtom(characterAtom);
  const [story, setStory] = useAtom(storyAtom);

  const { refetch, data, isFetching, error } = useStory({
    characters: [
      {
        name: 'milmil',
        age: 27,
        gender: 'female',
        description: character,
      },
    ],
    context,
  });

  const queryClient = useQueryClient();

  const getResponse = () => {
    refetch();
  };

  const handleNext = () => {
    getResponse();
  };

  const haldeCharacter = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLTextAreaElement;
    setCharacter(target.value);
  };

  const reset = () => {
    setContext('');
    setCharacter('');
    queryClient.removeQueries(['story']);
  };

  const cancel = () => {
    queryClient.cancelQueries(['story']);
  };

  useEffect(() => {
    const nextContext = data?.data[0].message.content;
    if (!nextContext) return;
    setContext((context) => context + nextContext);
  }, [data]);

  useEffect(() => {
    return () => {
      if (context) {
        setStory(context);
      }
    };
  }, [context, setStory]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Story Generator</h1>
      <textarea className="w-full border" onChange={haldeCharacter} value={character}></textarea>

      <Styledbutton disabled={isFetching} onClick={getResponse}>
        start!
      </Styledbutton>
      <Styledbutton disabled={!isFetching} onClick={cancel}>
        cancel!
      </Styledbutton>
      <Styledbutton disabled={isFetching} onClick={reset}>
        reset!
      </Styledbutton>
      <StoryArea story={context} isLoading={isFetching} error={error} />
      <Styledbutton disabled={isFetching} onClick={handleNext}>
        next!
      </Styledbutton>
    </div>
  );
};

export default Story;

const Styledbutton = tw.button`
bg-pink-500 disabled:bg-pink-200 border rounded-md text-white px-2 py-1
`;
