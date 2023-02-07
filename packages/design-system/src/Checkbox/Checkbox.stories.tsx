import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Design System/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Checkbox> = ({ children, ...args }) => {
  return <Checkbox {...args}>{children}</Checkbox>;
};

export const CheckboxStory = Template.bind({});
CheckboxStory.storyName = "Checkbox";
CheckboxStory.args = {
  isIndeterminate: false,
  value: "soccer",
  children: "Soccer",
};
