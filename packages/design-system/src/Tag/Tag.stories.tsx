import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from "./Tag";

export default {
  title: "Design System/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Tag> = (args) => {
  return <Tag {...args} />;
};

export const TagStory = Template.bind({});
TagStory.storyName = "Tag";
TagStory.args = {
  children: "contact@appsmith.com",
  size: "sm",
};

export const TagCloseStory = Template.bind({});
TagCloseStory.args = {
  ...TagStory.args,
  isClosable: true,
};
