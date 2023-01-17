import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio, RadioGroup } from "./Radio";

export default {
  title: "Design System/Radio/Radio Group",
  component: RadioGroup,
  argTypes: {
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
      description: "The axis the Radio Button(s) should align with.",
      table: {
        type: {
          summary: "horizontal | vertical",
        },
        defaultValue: { summary: "vertical" },
      },
    },
    children: {
      description: "The list of Radio components.",
    },
    gap: {
      description:
        "The gap between the Radio components. This accepts all css units.",
    },
    value: {
      description: "The current value (controlled).",
      control: {
        type: "text",
      },
    },
    defaultValue: {
      description: "The default value (uncontrolled).",
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "Handler that is called when the value changes.",
    },
  },
} as ComponentMeta<typeof RadioGroup>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <RadioGroup {...args}>
      <Radio value={"Value1"}>Radio1</Radio>
      <Radio value={"Value2"}>Radio2</Radio>
      <Radio isDisabled value={"Value3"}>
        Radio3
      </Radio>
      <Radio value={"Value4"}>Radio4</Radio>
    </RadioGroup>
  );
};

export const RadioGroupStory = Template.bind({});
RadioGroupStory.storyName = "Radio Group";
RadioGroupStory.args = {
  defaultValue: "Value1",
};
