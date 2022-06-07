import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TooltipComponent from "./index";

export default {
  title: "Design System/Tooltip Component",
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

export const Tooltip: ComponentStory<typeof TooltipComponent> = (args) => (
  <TooltipComponent {...args} />
);
