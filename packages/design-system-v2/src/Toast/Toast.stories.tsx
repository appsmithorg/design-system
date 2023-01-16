import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toast, toast } from "./Toast";

export default {
  title: "Design System/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Toast> = (args) => {
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <Toast />
    </div>
  );
};

const notify = () => toast("Filepicker was removed successfully");

export const ToastExample = Template.bind({});
ToastExample.storyName = "Toast";
ToastExample.args = {
  //add arguments here
};
