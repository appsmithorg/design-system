import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio as RadioComponent } from "./Radio";

export default {
  title: "Design System V2/Radio",
  component: RadioComponent,
} as ComponentMeta<typeof RadioComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioComponent> = (args) => {
  return <RadioComponent {...args} />;
};

export const Radio = Template.bind({});

Radio.args = {
  name: "radio",
  options: [
    {
      label: "Option 1",
      value: "option1",
      disabled: true,
      description: "This is a description1",
    },
    {
      label: "Option 2",
      value: "option2",
      description: "This is a description2",
    },
    {
      label: "Option 3",
      value: "option3",
      description: "This is a description3",
    },
  ],
  defaultValue: "option1",
  onChange: (e) => {
    // eslint-disable-next-line no-console
    console.log((e.target as HTMLInputElement).value);
  },
};
