import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const OPENAI_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;

const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const getResponse = async () => {
  const {
    data: { choices },
  } = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: '안녕하세요' }],
  });

  return choices;
};

export async function POST(request: Request) {
  try {
    const {body} = request;

    const choices = await getResponse(body.prompt);
    return NextResponse.json(choices);
  } catch (err) {
    console.error(err);
  }
}
