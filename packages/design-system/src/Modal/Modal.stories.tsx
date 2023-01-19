import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal } from "./Modal";

export default {
title: "Design System/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args} />;
};

export const ModalExample = Template.bind({});
ModalExample.storyName = "Modal";
ModalExample.args = {
  //add arguments here
};
