import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "./Icon";
import { IconCollection } from "./Icon.provider";
import { Text } from "../Text";

export default {
  title: "Design System/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon component which accepts name of any remix icon or any custom svg element.",
      },
    },
  },
  argTypes: {
    // adding this specifically to bring that sorting order in storybook
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Icon>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const IconStory = Template.bind({});
IconStory.storyName = "Icon";
IconStory.args = {
  name: "account-box-line",
  children: "",
  size: "md",
  withWrapper: false,
};
