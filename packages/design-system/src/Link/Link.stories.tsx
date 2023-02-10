import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Link } from "./Link";

export default {
  title: "Design System/Link",
  component: Link,
  argTypes: {
    endIcon: {
      control: "text",
      description: "the icon at the end of the link",
    },
    kind: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "the kind of link",
      defaultValue: "secondary",
    },
    startIcon: {
      control: "text",
      description: "the icon at the beginning of the link",
    },
    target: {
      control: "text",
      description: "the target of the link",
      defaultValue: "_blank",
    },
    to: {
      control: "text",
      description: "the place to navigate to",
    },
    children: {
      control: "text",
      description: "the words you want to display",
    },
  },
} as ComponentMeta<typeof Link>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />;
};

export const LinkExample = Template.bind({});
LinkExample.storyName = "Link";
LinkExample.args = {
  to: "old",
  children: "deprecated appsmith design system",
  startIcon: "arrow-right-line",
  kind: "primary",
};
