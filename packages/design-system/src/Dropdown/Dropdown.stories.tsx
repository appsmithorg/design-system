import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as Dropdown } from "./index";

export default {
  title: "Design System/Dropdown Original",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Dropdown> = (args) => {
  return <Dropdown {...args} />;
};

const options = [
  { label: "Primary", value: "PRIMARY" },
  { label: "Secondary", value: "SECONDARY" },
  { label: "Tertiary", value: "TERTIARY" },
];
const selected = [
  {
    label: "Primary",
    value: "PRIMARY",
  },
];

export const DropdownExample = Template.bind({});
DropdownExample.storyName = "Dropdown Original";
DropdownExample.args = {
  allowDeselection: true,
  containerClassName: "dropdown-container",
  isMultiSelect: true,
  // eslint-disable-next-line no-console
  onSelect: () => console.log("selected"),
  options: options,
  selected: selected,
  showLabelOnly: true,
};
