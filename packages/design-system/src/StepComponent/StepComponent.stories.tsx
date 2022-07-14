import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import StepComponent from "./index";

export default {
  title: "Design System/StepComponent",
  component: StepComponent,
} as ComponentMeta<typeof StepComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof StepComponent> = (args) => (
  <StepComponent {...args} />
);

export const Step = Template.bind({});
Step.args = {
  value: 1,
  min: 0,
  max: 4,
  steps: 4,
  displayFormat: (value) => value.toString(),
  onChange: (value) => console.log(value),
};
