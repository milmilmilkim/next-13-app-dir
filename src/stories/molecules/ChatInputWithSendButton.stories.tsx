import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatInput from '@/components/molecules/ChatInputWithSendButton';

export default {
  component: ChatInput,
  title: 'molecules/ChatInput',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ChatInput>;

const Template: ComponentStory<typeof ChatInput> = () => <ChatInput />;

export const Default = Template.bind({});
