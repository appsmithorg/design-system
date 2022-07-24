import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TreeDropdown from "./index";

export default {
  title: "Design System/Tree Dropdown",
  component: TreeDropdown,
} as ComponentMeta<typeof TreeDropdown>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TreeDropdown> = (args) => {
  return <TreeDropdown {...args} />;
};

const options = [
  { label: "Primary", value: "PRIMARY" },
  { label: "Secondary", value: "SECONDARY" },
  { label: "Tertiary", value: "TERTIARY" },
];

export const TreeDropdownExample = Template.bind({});
TreeDropdownExample.storyName = "Tree Dropdown";
TreeDropdownExample.args = {
  optionTree: options,
  selectedValue: "PRIMARY",
  defaultText: "Some default text here",
  onSelect: () => console.log("Selected"),
};
