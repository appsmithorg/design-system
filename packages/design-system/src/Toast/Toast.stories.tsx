import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toaster, ToastComponent } from "./index";
import { Variant } from "../constants/variants";

export default {
  // change ComponentDisplay to the name of the component you are writing a story for
  title: "Design System/Toast",
  component: ToastComponent,
} as ComponentMeta<typeof ToastComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ToastComponent> = (args) => {
  return <ToastComponent {...args} />;
};

export const Toast = Template.bind({});
Toast.args = {
  text: "I hope you have good bread",
  variant: Variant.success,
};
