import { GPTRequest } from '@/types/api/gpt';
import { Configuration, OpenAIApi } from 'openai';
import { Message } from '@/types/api/gpt';

const OPENAI_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;

export const postGPT = async (messages: Message[], gptRequest: GPTRequest, apiKey = OPENAI_KEY) => {
  const configuration = new Configuration({
    apiKey,
  });

  const openai = new OpenAIApi(configuration);

  const { user, temperature, presencePenalty, frequencyPenalty, maxTokens } = gptRequest;

  const { data } = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    max_tokens: maxTokens,
    user,
    temperature,
    presence_penalty: presencePenalty,
    frequency_penalty: frequencyPenalty,
    // stop,
  });

  return data;
};
