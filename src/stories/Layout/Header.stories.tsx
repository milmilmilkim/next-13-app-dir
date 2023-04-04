import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '@/layout/Header';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});
