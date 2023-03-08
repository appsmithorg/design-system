import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toggle } from "./Toggle";
import { Icon } from "../Icon";

export default {
  title: "Design System/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Toggle> = (args) => {
  return <Toggle {...args} />;
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  children: <Icon name="bold" size="md" />,
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: <Icon name="js-toggle" size="sm" />,
};
