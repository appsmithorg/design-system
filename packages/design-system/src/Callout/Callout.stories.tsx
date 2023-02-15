import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Callout } from "./Callout";
import { Text } from "../Text";

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
  children: <Text kind="body-m">This is a successful callout</Text>,
};
CalloutStory.argTypes = {
  kind: {
    defaultValue: "info",
    control: {},
  },
};
