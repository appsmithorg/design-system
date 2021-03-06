import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ColorPickerComponent from "./index";

export default {
  title: "Design System/ColorPicker",
  component: ColorPickerComponent,
} as ComponentMeta<typeof ColorPickerComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ColorPickerComponent> = (args) => (
  <ColorPickerComponent {...args} />
);

export const ColorPicker = Template.bind({});

ColorPicker.args = {
  color: "#ff0000",
  // eslint-disable-next-line no-console
  changeColor: (color) => console.log(color),
};
