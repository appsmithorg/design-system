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
  $padding: "8px 14px",
  autoFocus: true,
  className: "t--commit-comment-input",
  disabled: true,
  fill: true,
  height: "80px",
  onChange: () => console.log("input has changed"),
  placeholder: "This is a Text Input placeholder",
  // ref={commitInputRef}
  // style: {{ resize: "none" }},
  trimValue: false,
  useTextArea: true,
  helperText: "Some text",
  value: () => console.log("This is the value"),
};
