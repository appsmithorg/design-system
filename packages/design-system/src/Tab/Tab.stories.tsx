import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tab } from "./Tab";

export default {
  title: "Design System/Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Tab> = (args) => {
  return <Tab {...args} />;
};

export const TabStory = Template.bind({});
TabStory.storyName = "Tab";
TabStory.args = {
  //add arguments here
};
