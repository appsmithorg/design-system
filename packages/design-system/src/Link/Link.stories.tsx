import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Link } from "./Link";

export default {
  title: "Design System/Link",
  component: Link,
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
  icon: "arrow-right-line",
};
