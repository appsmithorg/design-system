import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import ButtonComponent, { Size } from "./index";

export default {
  title: "Design System/Button",
  component: ButtonComponent,
  args: {
    fill: true,
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log("Clicked");
    },
    size: Size.large,
    tag: "button",
    text: "Button",
  },
} as ComponentMeta<typeof ButtonComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ButtonComponent> = (args) => {
  return <ButtonComponent {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  category: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  category: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  category: "tertiary",
};

Primary.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByText('Button')
  await userEvent.click(item);
}

Secondary.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByText('Button')
  await userEvent.click(item);
}

Tertiary.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByText('Button')
  await userEvent.click(item);
}
