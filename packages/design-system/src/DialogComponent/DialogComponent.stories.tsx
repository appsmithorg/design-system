import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import DialogComponent from "./index";

export default {
  title: "Design System/Dialog Component",
  component: DialogComponent,
} as ComponentMeta<typeof DialogComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DialogComponent> = (args) => (
  <DialogComponent {...args} />
);

export const Dialog = Template.bind({});
Dialog.args = {
  canEscapeKeyClose: true,
  canOutsideClickClose: true,
  isOpen: () => console.log("Is open"),
  onClose: () => console.log("on close"),
  title: "This is the dialog title",
  trigger: <button>Click me!</button>,
  children: <span>Here is a child of the dialog</span>,
};
