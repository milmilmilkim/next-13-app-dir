import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { StoryRequest } from '@/types/data/story';
import { AxiosResponse } from 'axios';

const useCreateStory = (storyRequest: StoryRequest) => {
  const url = '/api/gpt/story';

  const postStoryOptions = () => {
    return axios.post(url, storyRequest);
  };

  const query = useQuery(['story', storyRequest], postStoryOptions, {
    onSuccess: () => console.log('ok'),
    enabled: false, // 초기에는 API 요청을 보내지 않음
  });

  return query;
};

export default useCreateStory;
