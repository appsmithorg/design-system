import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { FormControl, FormError, FormHelper, FormLabel } from "./FormControl";
import { Input } from "../Input/Input";

export default {
  title: "Design System/FormControl",
  component: FormControl,
} as Meta<typeof FormControl>;

type Story = StoryObj<typeof FormControl>;

export const FormControlStory: Story = {
  name: "FormControl",
  args: {},
  render: (args) => (
    <FormControl {...args}>
      <FormLabel>Label</FormLabel>
      <Input placeholder="Control" />
      <FormHelper>Heler text</FormHelper>
      <FormError>Error message</FormError>
    </FormControl>
  ),
};
