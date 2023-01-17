import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "Design System V2/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextInput> = (args) => {
  return <TextInput {...args} />;
};

export const TextInputExample = Template.bind({});
TextInputExample.storyName = "TextInput";
TextInputExample.args = {
  label: "Label",
  placeholder: "Placeholder",
  errorMessage: "Error Message",
  description: "Description",
  isRequired: true,
};
