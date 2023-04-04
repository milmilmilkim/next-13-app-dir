import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@/components/atoms/Button';
import { ButtonType } from '@/types/components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: Object.entries(ButtonType).reduce((options: { [key: string]: ButtonType }, [key, value]) => {
          if (typeof value === 'number') {
            options[key] = value;
          }
          return options;
        }, {}),
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => <Button {...args}>{children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.Primary,
  children: 'Button',
};
