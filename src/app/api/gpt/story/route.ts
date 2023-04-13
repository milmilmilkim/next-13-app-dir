import { NextResponse } from 'next/server';

import { postGPT } from '@/api/gpt';
import { GPTRequest, Message } from '@/types/api/gpt';

import { Character } from '@/types/data/character';
import { StoryRequest } from '@/types/data/story';

export async function POST(request: Request) {
  const messages: Message[] = [];

  ////////////////////////////

  let prompt = 'system: Write a novel in dialogue form, including directives. Follow the character format below';
  let context = '';
  let characters: Character[] = [];

  try {
    const req: StoryRequest = await request.json();

    if (req.context) {
      context = req.context;
    }
    characters = req.characters;

    prompt += characters.map((character) => JSON.stringify(character)).join(',');

    messages.push({ role: 'system', content: prompt });
    messages.push({ role: 'system', content: 'write in korean' });

    if (context) {
      messages.push({ role: 'assistant', content: context });
      messages.push({ role: 'system', content: 'keep going' });
    }

    console.time('time');
    const { choices, id } = await postGPT(messages, req.options);

    console.timeEnd('time');

    // TODO: token 길이 등의 검증 로직

    return NextResponse.json(choices);
  } catch (err) {
    console.error(err);
  }
}
