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

export const SuccessTag = Template.bind({});
SuccessTag.args = {
  ...TagStory.args,
  kind: "success",
};

export const ErrorTag = Template.bind({});
ErrorTag.args = {
  ...TagStory.args,
  kind: "error",
};

export const WarningTag = Template.bind({});
WarningTag.args = {
  ...TagStory.args,
  kind: "warning",
};

export const InfoTag = Template.bind({});
InfoTag.args = {
  ...TagStory.args,
  kind: "info",
};

export const SpecialTag = Template.bind({});
SpecialTag.args = {
  ...TagStory.args,
  kind: "special",
};

export const PremiumTag = Template.bind({});
PremiumTag.args = {
  ...TagStory.args,
  kind: "premium",
};

export const TagCloseStory = Template.bind({});
TagCloseStory.args = {
  ...TagStory.args,
  isClosable: true,
};
