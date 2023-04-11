interface StoryProps {
  story: string;
  isLoading: boolean;
  error: unknown;
}
const StoryArea: React.FC<StoryProps> = ({ story }) => {
  if (story) {
    return <div style={{ whiteSpace: 'pre-wrap' }}>{story}</div>;
  } else {
    return <div></div>;
  }
};

export default StoryArea;
