import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { postGPT } from '@/api/gpt';
import { GPTRequest } from '@/types/api/gpt';

export async function POST(request: Request) {
  let prompt = '';
  let context = '';

  try {
    const req = await request.json();
    context = req.context;
  } catch (err) {
    context = '';
  }

  if (context) {
    prompt += context;
    prompt += 'keep going';
  } else {
    prompt =
      'system: Write a novel in dialogue form, including directives. Follow the character format below name: sori kim, job: frontend developer wirte in korean';
  }

  const GPTRequest: GPTRequest = {
    messages: [{ role: 'system', content: prompt }],
    maxTokens: 200,
  };

  const choices = await postGPT(GPTRequest);
  return NextResponse.json(choices);
}
