import React from 'react';
import { IconButton } from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      options: ['btn-primary', 'btn-secondary'],
      control: { type: 'radio' },
    },
    handleClick: { action: 'clicked' },
  },
  args: {},
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'btn-primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'btn-secondary',
};
