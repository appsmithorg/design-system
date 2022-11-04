import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Link from "./index";

export default {
  // change ComponentDisplay to the name of the component you are writing a story for
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
  to: "www.appsmith.com",
  children: "a link",
};

// export const LinkExample = <Link to="www.appsmith.com">a link</Link>;
