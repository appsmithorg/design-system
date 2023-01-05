import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio as RadioComponent } from "./Radio";

export default {
  title: "Design System V2/Radio",
  component: RadioComponent,
} as ComponentMeta<typeof RadioComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioComponent> = (args) => {
  return <RadioComponent {...args} />;
};

export const Radio = Template.bind({});

Radio.args = {
  checked: true,
  disabled: false,
  label: "Radio",
};
