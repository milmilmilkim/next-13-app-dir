type StoryType = 'scenario' | 'novel';

interface StoryRequest {
  storyType: StoryType;
  worldView: string;
  option?: string;
}
