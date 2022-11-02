import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ButtonTabComponent from "./index";

export default {
  title: "Design System/ButtonTab",
  component: ButtonTabComponent,
} as ComponentMeta<typeof ButtonTabComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ButtonTabComponent> = (args) => {
  return <ButtonTabComponent {...args} />;
};

export const ButtonTab = Template.bind({});
ButtonTab.args = {
  options: [
    {
      icon: "DELETE_CONTROL",
      value: "delete",
      width: 100,
    },
    {
      icon: "INCREASE_CONTROL",
      value: "edit",
      width: 100,
    },
  ],
  values: ["delete"],
  selectButton: (value, isUpdatedViaKeyboard) => {
    // eslint-disable-next-line no-console
    console.log("value:", value, "isUpdatedViaKeyboard:", isUpdatedViaKeyboard);
  },
};

export const ButtonTabWithLabel = Template.bind({});
ButtonTabWithLabel.args = {
  options: [
    {
      label: "AUTO",
      value: "auto",
    },
    {
      label: "TOP",
      value: "top",
    },
    {
      label: "LEFT",
      value: "left",
      selected: true,
    },
  ],
  values: ["left"],
  fullWidth: true,
  selectButton: (value, isUpdatedViaKeyboard) => {
    // eslint-disable-next-line no-console
    console.log("value:", value, "isUpdatedViaKeyboard:", isUpdatedViaKeyboard);
  },
};
