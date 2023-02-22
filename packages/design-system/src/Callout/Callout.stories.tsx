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
  return (
    <Callout {...args}>
      <Text kind="body-m">{args.children}</Text>
    </Callout>
  );
};

export const CalloutStory = Template.bind({});
CalloutStory.storyName = "Callout";
CalloutStory.args = {
  children: "This is a successful callout",
};
CalloutStory.argTypes = {
  children: {
    control: {
      type: "text",
    },
  },
  kind: {
    defaultValue: "info",
    control: {},
  },
};

export const CalloutWithLink = Template.bind({});
CalloutWithLink.args = {
  children: "This is a successful callout",
  links: [
    {
      to: "https://www.appsmith.com",
      children: "Home",
    },
    {
      to: "https://docs.appsmith.com",
      children: "Docs",
    },
  ],
};
CalloutWithLink.argTypes = {
  children: {
    control: {
      type: "text",
    },
  },
  kind: {
    defaultValue: "info",
    control: {},
  },
};
