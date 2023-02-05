import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SegmentedControl } from "./SegmentedControl";

export default {
  title: "Design System/SegmentedControl",
  component: SegmentedControl,
} as ComponentMeta<typeof SegmentedControl>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SegmentedControl> = (args) => {
  return <SegmentedControl {...args} />;
};

export const SegmentedControlStory = Template.bind({});
SegmentedControlStory.storyName = "SegmentedControl";
SegmentedControlStory.args = {
  //add arguments here
};
