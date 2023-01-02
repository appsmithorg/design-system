import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button as ButtonComponent } from "./Button";

export default {
  title: "Design System V2/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ButtonComponent> = (args) => {
  return <ButtonComponent {...args}>Hi</ButtonComponent>;
};

export const Button = Template.bind({});

Button.args = {
  onClick: () => console.log('Button clicked!'),
  disabled: true,
}
