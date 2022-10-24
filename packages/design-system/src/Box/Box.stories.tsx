import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text, { TextType } from "../Text";

// change ThisComponentName to the name of the component you are writing a story for
import Box from "./index";

export default {
  // change ComponentDisplay to the name of the component you are writing a story for
  title: "Design System/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Box> = (args) => {
  return (
    <div style={{ width: "30rem" }}>
      <Box {...args} />
    </div>
  );
};

export const BoxExample = Template.bind({});
BoxExample.storyName = "Box";
BoxExample.args = {
  space: "var(--ads-spaces-7)",
  direction: "horizontal",
  children: (
    <>
      <Text type={TextType.P1}>Privacy Policy</Text>
      <Text type={TextType.P1}>Terms and Conditions</Text>
    </>
  ),
};
