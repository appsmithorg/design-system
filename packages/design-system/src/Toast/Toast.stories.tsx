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
  return (
    <div>
      <button onClick={notify}>Click me</button>
      <Toast />
    </div>
  );
};

const notify = (args) =>
  toast("Filepicker was removed successfully", { ...args });

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  kind: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  kind: "warning",
};

export const Information = Template.bind({});
Information.args = {
  kind: "info",
};

export const Error = Template.bind({});
Error.args = {
  kind: "error",
};
