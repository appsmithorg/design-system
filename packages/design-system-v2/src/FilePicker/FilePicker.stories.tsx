import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FilePicker } from "./FilePicker";

export default {
  title: "Design System/FilePicker",
  component: FilePicker,
} as ComponentMeta<typeof FilePicker>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof FilePicker> = (args) => {
  return <FilePicker {...args} />;
};

export const FilePickerExample = Template.bind({});
FilePickerExample.storyName = "FilePicker";
FilePickerExample.args = {
  //add arguments here
};
