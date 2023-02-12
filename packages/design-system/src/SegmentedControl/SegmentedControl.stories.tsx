import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SegmentedControl } from "./SegmentedControl";

export default {
  title: "Design System/Segmented Control",
  component: SegmentedControl,
} as ComponentMeta<typeof SegmentedControl>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SegmentedControl> = (args) => {
  return <SegmentedControl {...args} />;
};

export const SegmentedControlStory = Template.bind({});
SegmentedControlStory.storyName = "Default";
SegmentedControlStory.args = {
  options: [
    {
      value: "one",
      label: "One",
      startIcon: "layout-line",
      endIcon: "layout-line",
    },
    {
      value: "two",
      label: "Two",
      startIcon: "layout-2-line",
      endIcon: "layout-2-line",
    },
    {
      value: "three",
      label: "Three",
      startIcon: "layout-3-line",
      endIcon: "layout-3-line",
      isDisabled: true,
    },
    {
      value: "four",
      label: "Four",
      startIcon: "layout-2-line",
      endIcon: "layout-2-line",
    },
    {
      value: "five",
      label: "Five",
      startIcon: "layout-3-line",
      endIcon: "layout-3-line",
    },
  ],
  defaultValue: "one",
};

export const SegmentedControlStoryWithIcons = Template.bind({});
SegmentedControlStoryWithIcons.storyName = "Only Icons";
SegmentedControlStoryWithIcons.args = {
  options: [
    {
      value: "one",
      startIcon: "layout-line",
    },
    {
      value: "two",
      startIcon: "layout-2-line",
    },
    {
      value: "three",
      startIcon: "layout-3-line",
    },
  ],
  defaultValue: "one",
};

export const SegmentedControlStoryWithLabels = Template.bind({});
SegmentedControlStoryWithLabels.storyName = "Only Labels";
SegmentedControlStoryWithLabels.args = {
  options: [
    {
      value: "one",
      label: "One",
    },
    {
      value: "two",
      label: "Two",
    },
    {
      value: "three",
      label: "Three",
    },
  ],
  defaultValue: "one",
};
