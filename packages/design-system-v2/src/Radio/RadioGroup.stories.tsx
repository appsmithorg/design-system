import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  Radio as RadioComponent,
  RadioGroup as RadioGroupElement,
} from "./Radio";

export default {
  title: "Design System V2/Radio/Radio Group",
  component: RadioGroupElement,
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
} as ComponentMeta<typeof RadioGroupElement>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioGroupElement> = (args) => {
  return (
    <RadioGroupElement {...args}>
      <RadioComponent value={"Value1"}>Radio1</RadioComponent>
      <RadioComponent value={"Value2"}>Radio2</RadioComponent>
      <RadioComponent isDisabled value={"Value3"}>
        Radio3
      </RadioComponent>
      <RadioComponent value={"Value4"}>Radio4</RadioComponent>
    </RadioGroupElement>
  );
};

export const RadioGroup = Template.bind({});

RadioGroup.args = {
  defaultValue: "Value1",
};
