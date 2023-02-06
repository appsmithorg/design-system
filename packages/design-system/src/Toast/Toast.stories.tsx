import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toast, toast } from "./Toast";
import { ToastProps } from "./Toast.types";

export default {
  title: "Design System/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Toast> = (args) => {
  const notify = () =>
    toast("Filepicker was removed successfully", { ...args });

  return (
    <div>
      <button onClick={notify}>Click me</button>
      <Toast />
    </div>
  );
};

export const Default = Template.bind({});
