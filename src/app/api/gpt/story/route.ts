import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { postGPT } from '@/api/gpt';
import { GPTRequest } from '@/types/api/gpt';

export async function POST(request: Request) {
  let prompt = 'system: Write a novel in dialogue form, including directives. Follow the character format below';
  let context = '';
  let character = '';

  try {
    const req = await request.json();
    context = req.context;
    character = req.character;
  } catch (err) {
    console.error(err);
  }

  prompt += character;

  prompt += 'write in korean';

  if (context) {
    prompt += context;
    prompt += 'keep going';
  }

  const GPTRequest: GPTRequest = {
    messages: [{ role: 'system', content: prompt }],
    maxTokens: 500,
  };

  const choices = await postGPT(GPTRequest);
  return NextResponse.json(choices);
}
