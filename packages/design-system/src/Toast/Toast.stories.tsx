import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toast, toast } from "./Toast";

export default {
  title: "Design System/Toast",
  component: Toast,
  argTypes: {
    content: {
      control: "text",
      description: "The content the toast contains",
      type: {
        required: true,
      },
    },
    kind: {
      description: "visual style to be used indicating type of toast ",
    },
    action: {
      description:
        "An object that displays an action that can be triggered from the toast",
    },
  },
} as ComponentMeta<typeof Toast>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Toast> = (args) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const notify = () => toast.show(args.content, { ...args });

  return (
    <div>
      <button onClick={notify}>Click me</button>
      <Toast />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: "Am I a toast?",
};

export const ToastWithAction = Template.bind({});
ToastWithAction.args = {
  content: "Widget was removed",
  kind: "success",
  action: {
    actionText: "undo",
    effect: () => console.log("effect affected"),
  },
};
