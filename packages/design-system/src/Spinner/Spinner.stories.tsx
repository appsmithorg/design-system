import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Spinner } from "./Spinner";

export default {
  title: "Design System/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

export const SpinnerStory = Template.bind({});
SpinnerStory.storyName = "Spinner";
SpinnerStory.args = {
  size: "sm",
};
