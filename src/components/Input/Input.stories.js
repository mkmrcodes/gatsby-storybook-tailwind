import React from 'react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
    handleClick: { action: 'clicked' },
  },
  args: {},
};

const Template = (args) => <Input {...args} />;

export const UserName = Template.bind({});
// SampleInput.args = {
//   ...Primary.args,
// };
