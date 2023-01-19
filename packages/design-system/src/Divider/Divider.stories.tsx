import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Divider } from "./Divider";
import { DividerProps } from "./Divider.types";

export default {
  title: "Design System/Divider",
  component: Divider,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Divider>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Divider> = (args) => {
  return (
    <div
      style={{
        width: "6rem",
        height: "6rem",
        border: "2px solid blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Divider {...args} />
    </div>
  );
};

export const DividerStory = Template.bind({});
DividerStory.storyName = "Divider";
