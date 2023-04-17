import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToggleGroup } from "./ToggleGroup";

export default {
  title: "Design System/Toggle/Toggle Group",
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component:
          "A button group component used for selecting multiple values. ",
      },
    },
  },
} as ComponentMeta<typeof ToggleGroup>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ToggleGroup> = (args) => {
  return <ToggleGroup {...args} />;
};

export const ToggleGroupStory = Template.bind({});
ToggleGroupStory.storyName = "ToggleGroup";
ToggleGroupStory.args = {
  options: [
    {
      icon: "bold-font",
      value: "BOLD",
    },
    {
      icon: "italics-font",
      value: "ITALIC",
    },
  ],
  values: ["ITALIC"],
};
