import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextInput from "./index";

export default {
  title: "Design System/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextInput> = (args) => {
  return <TextInput {...args} />;
};

export const TextInputExample = Template.bind({});
TextInputExample.storyName = "Text Input";
TextInputExample.args = {
  $padding: "8px",
  autoFocus: true,
  className: "t--commit-comment-input",
  disabled: false,
  height: "40px",
  onChange: () => console.log("input has changed"),
  placeholder: "Enter text",
  trimValue: false,
  helperText: "Some text",
  value: "some text in the thing",
  readOnly: false,
  useTextArea: false,
};
