import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToggleButton } from "./ToggleButton";

export default {
  title: "Design System/Toggle Button",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ToggleButton> = (args) => {
  return <ToggleButton {...args} />;
};

export const ToggleButtonStroy = Template.bind({});
ToggleButtonStroy.storyName = "Toggle Button";
ToggleButtonStroy.args = {
  size: "sm",
  icon: "js-toggle-v2",
};
