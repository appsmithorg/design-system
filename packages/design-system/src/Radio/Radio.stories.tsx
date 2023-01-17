import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio } from "./Radio";

export default {
  title: "Design System/Radio",
  component: Radio,
  argTypes: {
    children: {
      description: "The label for the Radio. Accepts any renderable node.",
    },
    value: {
      description:
        "The value of the radio button, used when submitting an HTML form.",
      control: {
        type: "text",
      },
    },
    isDisabled: {
      type: "boolean",
      description: "Whether the radio button is disabled.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
  },
} as ComponentMeta<typeof Radio>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Radio> = (args) => {
  const { children, ...rest } = args;
  return <Radio {...rest}>{children}</Radio>;
};

export const RadioStory = Template.bind({});
RadioStory.storyName = "Radio";
RadioStory.args = {
  children: "Radio",
  value: "Radio",
};
