import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TooltipComponent from "./index";

export default {
  title: "Design System/Tooltip Component",
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TooltipComponent> = (args) => (
  <TooltipComponent {...args}>Target</TooltipComponent>
);

export const Tooltip = Template.bind({
  content: "This is the tooltip 😁",
  hoverOpenDelay: 200,
});
