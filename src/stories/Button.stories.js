import React from 'react';

import { Button } from './Button';

export default {
  title: 'Buttons/Primary',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Button',
};
