import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToggleButton } from "./ToggleButton";

export default {
  title: "Design System/Toggle/Toggle Button",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ToggleButton> = (args) => {
  return <ToggleButton {...args} />;
};

export const ToggleButtonStory = Template.bind({});
ToggleButtonStory.storyName = "Toggle Button";
ToggleButtonStory.args = {
  size: "sm",
  icon: "js-toggle-v2",
};
