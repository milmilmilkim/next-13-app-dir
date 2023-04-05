import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '@/components/atoms/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => <Input {...props} />;

export const Text = Template.bind({});
