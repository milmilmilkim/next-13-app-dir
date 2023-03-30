import { ComponentStory, ComponentMeta } from '@storybook/react';
import Counter from '@/components/Counter';

export default {
  component: Counter,
  title: 'Common/Counter',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const Default = Template.bind({});
