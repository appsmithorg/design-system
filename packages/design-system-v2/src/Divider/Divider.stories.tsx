import React from "react";
import { ComponentMeta } from "@storybook/react";

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

export const DividerExample = (props: DividerProps) => {
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
      <Divider {...props} />
    </div>
  );
};
