import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "./index";

export default {
  title: "Design System/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const TextStory = Template.bind({});
TextStory.storyName = "Text";
TextStory.args = {
  children: "How vexingly quick daft zebras jump!",
};
