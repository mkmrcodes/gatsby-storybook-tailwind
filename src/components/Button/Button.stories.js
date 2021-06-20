import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
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

const Template = (args) => <Button {...args} />;

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
export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  variant: 'btn-success',
};
export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  variant: 'btn-danger',
};
export const Info = Template.bind({});
Info.args = {
  label: 'Button',
  variant: 'btn-info',
};
