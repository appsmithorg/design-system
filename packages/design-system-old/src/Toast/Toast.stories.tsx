import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToastComponent } from "./index";
import { Variant } from "../constants/variants";
import Button from "../Button";

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

const DebugButton = () => (
  <Button
    icon="bug"
    tag="button"
    text="Debug"
    type="button"
    variant={Variant.danger}
  />
);

export const ToastWithDebugButton = Template.bind({});
ToastWithDebugButton.args = {
  text: "Different bread pop",
  variant: Variant.danger,
  showDebugButton: {
    component: DebugButton,
    componentProps: {
      className: "t--toast-debug-button",
      source: "TOAST",
    },
  },
};
