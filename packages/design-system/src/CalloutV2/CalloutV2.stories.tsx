import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Callout } from "./index";

export default {
  title: "Design System/Callout",
  component: Callout,
} as ComponentMeta<typeof Callout>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Callout> = (args) => {
  return <Callout {...args} />;
};

export const CalloutExample = Template.bind({});
CalloutExample.storyName = "Callout";
CalloutExample.args = {
  // actionLabel: calloutBanner.actionLabel,
  actionLabel: "The action label",
  desc: "Here is a description",
  type: "Info",
};
