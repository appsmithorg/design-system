import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Design System/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const InputExample = Template.bind({});
InputExample.storyName = "Input";
InputExample.args = {
  //add arguments here
};
