import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Menu } from "./Menu";

export default {
  title: "Design System/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Menu> = (args) => {
  return <Menu {...args} />;
};

export const MenuStory = Template.bind({});
MenuStory.storyName = "Menu";
MenuStory.args = {
  //add arguments here
};
