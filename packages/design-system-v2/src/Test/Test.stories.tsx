import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TestComponent from "./index";

export default {
  title: "Design System/Test",
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TestComponent> = (args) => {
  return <TestComponent />;
};

export const Test = Template.bind({});
