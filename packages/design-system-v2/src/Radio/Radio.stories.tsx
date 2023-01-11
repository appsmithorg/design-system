import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio as RadioComponent } from "./Radio";

export default {
  title: "Design System V2/Radio",
  component: RadioComponent,
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
} as ComponentMeta<typeof RadioComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioComponent> = (args) => {
  const { children, ...rest } = args;
  return <RadioComponent {...rest}>{children}</RadioComponent>;
};

export const Radio = Template.bind({});

Radio.args = {
  children: "Radio",
  value: "Radio",
};
