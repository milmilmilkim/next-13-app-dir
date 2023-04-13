import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const OPENAI_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;

const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const getResponse = async (message = '안녕하세요') => {
  const {
    data: { choices },
  } = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
  });

  return choices;
};

export async function GET() {
  try {
    return NextResponse.json({ message: 'hello' });
  } catch (err) {
    console.error(err);
  }
}
