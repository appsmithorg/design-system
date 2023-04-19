import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio, RadioGroup } from "./Radio";

export default {
  title: "Design System/Radio/Radio Group",
  component: RadioGroup,
  parameters: { controls: { sort: "requiredFirst" } },
} as ComponentMeta<typeof RadioGroup>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <RadioGroup {...args}>
      <Radio value={"Value1"}>Radio1</Radio>
      <Radio value={"Value2"}>Radio2</Radio>
      <Radio value={"Value3"}>Radio3</Radio>
      <Radio value={"Value4"}>Radio4</Radio>
    </RadioGroup>
  );
};

export const RadioGroupStory = Template.bind({});
RadioGroupStory.storyName = "Radio Group";
RadioGroupStory.args = {
  defaultValue: "Value1",
  isDisabled: false,
};
