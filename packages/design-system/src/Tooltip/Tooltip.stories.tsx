import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tooltip } from "./Tooltip";

export default {
title: "Design System/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Tooltip> = (args) => {
  return <Tooltip {...args} />;
};

export const TooltipExample = Template.bind({});
TooltipExample.storyName = "Tooltip";
TooltipExample.args = {
  //add arguments here
};
