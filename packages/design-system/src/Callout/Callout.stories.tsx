import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Callout from "./index";

export default {
  title: "Design System/Callout",
  component: Callout,
} as ComponentMeta<typeof Callout>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args} />
);

export const CalloutExample = Template.bind({});
CalloutExample.storyName = "Callout";
CalloutExample.args = {
  text: "This is a call out",
  label: "Here is a label",
};
