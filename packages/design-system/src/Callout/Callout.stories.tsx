import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Callout } from "./Callout";

export default {
  title: "Design System/Callout",
  component: Callout,
} as ComponentMeta<typeof Callout>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Callout> = (args) => {
  return <Callout {...args} />;
};

export const CalloutStory = Template.bind({});
CalloutStory.storyName = "Callout";
CalloutStory.args = {
  //add arguments here
};
