import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// change ThisComponentName to the name of the component you are writing a story for
import FormGroupComponent from "./index";
import TextInput from "TextInput";

export default {
  // change ComponentDisplay to the name of the component you are writing a story for
  title: "Design System/FormGroup",
  component: FormGroupComponent,
} as ComponentMeta<typeof FormGroupComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof FormGroupComponent> = (args) => {
  return (
    <FormGroupComponent {...args}>
      <TextInput autoFocus placeholder="Enter email" type="email" />
    </FormGroupComponent>
  );
};

export const FormGroup = Template.bind({});
FormGroup.storyName = "Form Group";
FormGroup.args = {
  label: "Email",
};
