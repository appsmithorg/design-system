import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  Radio as RadioComponent,
  RadioGroup as RadioGroupElement,
} from "./Radio";

export default {
  title: "Design System V2/Radio/Radio Group",
  component: RadioGroupElement,
  subcomponents: { RadioComponent },
} as ComponentMeta<typeof RadioGroupElement>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioGroupElement> = (args) => {
  return (
    <RadioGroupElement {...args}>
      <RadioComponent value={"Value1"}>Radio1</RadioComponent>
      <RadioComponent value={"Value2"}>Radio2</RadioComponent>
      <RadioComponent value={"Value3"}>Radio3</RadioComponent>
      <RadioComponent value={"Value4"}>Radio4</RadioComponent>
    </RadioGroupElement>
  );
};

export const RadioGroup = Template.bind({});

RadioGroup.args = {};
