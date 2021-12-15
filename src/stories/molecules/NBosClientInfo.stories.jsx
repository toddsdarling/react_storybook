import React from 'react';

import { NBosClientInfo } from '../../components/molecules/NBosClientInfo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/NBosClientInfo',
  component: NBosClientInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <NBosClientInfo {...args}>here is the client info card</NBosClientInfo>
);

export const Primary = Template.bind({});
Primary.args = {};
