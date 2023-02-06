import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toggle } from "./Toggle";

export default {
  title: "Design System/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Toggle> = (args) => {
  return (
    <div style={{ width: "9rem" }}>
      <Toggle {...args} />
    </div>
  );
};

export const ToggleStory = Template.bind({});
ToggleStory.storyName = "Toggle";
ToggleStory.args = {
  children: "Label",
};
