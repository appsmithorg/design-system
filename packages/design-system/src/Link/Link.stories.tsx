import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Link } from "./Link";

/**
 * TODO
 * - Add browser router here for story
 * - https://stackoverflow.com/questions/58949438/how-do-i-use-reacts-link-component-in-an-external-npm-package-without-error-in
 * - confirm this works in production
 */

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
  href: "https://appsmith.com",
  children: "the missing link",
  target: "_blank"
};
