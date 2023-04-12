import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { postGPT } from '@/api/gpt';
import { GPTRequest } from '@/types/api/gpt';

import { Character } from '@/types/data/character';

export async function POST(request: Request) {
  let prompt = 'system: Write a novel in dialogue form, including directives. Follow the character format below';

  let context = '';
  let characters: Character[] = [];
  let maxTokens = 200;

  try {
    const req = await request.json();

    context = req.context;
    characters = req.characters;
    maxTokens = req.maxTokens;
  } catch (err) {
    console.error(err);
  }

  prompt += characters.map((character) => JSON.stringify(character)).join(',');

  prompt += 'write in korean';

  if (context) {
    prompt += context;
    prompt += 'keep going';
  }

  // prompt += 'just write 1 lines (1 character)';
  prompt += `When the story is over, say: ###end##`;

  const GPTRequest: GPTRequest = {
    messages: [{ role: 'system', content: prompt }],
    maxTokens,
    stop: '###end###',
  };

  console.time('gpttime');
  console.log('start');
  const { choices } = await postGPT(GPTRequest);

  console.timeEnd('gpttime');
  console.log('----------');
  // TODO: token 등의 검증 로직

  return NextResponse.json(choices);
}
