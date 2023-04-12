import { GPTRequest } from '@/types/api/gpt';
import { Configuration, OpenAIApi } from 'openai';

const OPENAI_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;

export const postGPT = async (gptRequest: GPTRequest, apiKey = OPENAI_KEY) => {
  const configuration = new Configuration({
    apiKey,
  });

  const openai = new OpenAIApi(configuration);

  const { messages, user, temperature, presencePenalty, frequencyPenalty, stop, maxTokens } = gptRequest;

  const { data } = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: messages[0].role, content: messages[0].content }],
    max_tokens: maxTokens,
    user,
    temperature,
    presence_penalty: presencePenalty,
    frequency_penalty: frequencyPenalty,
    // stop,
  });

  return data;
};
