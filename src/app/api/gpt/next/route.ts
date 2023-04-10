import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { postGPT } from '@/api/gpt';
import { GPTRequest } from '@/types/api/gpt';

export async function POST(req: NextApiRequest) {
  try {
    const body = req.body;

    const content = 'keep going';

    const GPTRequest: GPTRequest = {
      messages: [{ role: 'user', content }],
      maxTokens: 200,
    };

    const choices = await postGPT(GPTRequest);
    return NextResponse.json(choices);
  } catch (err) {
    console.error(err);
  }
}
