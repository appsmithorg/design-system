import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextComponent, { TextType } from "./index";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Design System/Text",
  component: TextComponent,
} as ComponentMeta<typeof TextComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextComponent> = (args) => {
  return <TextComponent {...args}> Some Content 🍎 </TextComponent>;
};

export const Text = Template.bind({});
Text.args = {
  type: TextType.P0,
};

Text.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByText(' Some Content 🍎 ')
}

