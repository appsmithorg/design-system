import React, { useEffect } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Resizable } from "re-resizable";
import { ButtonGroup } from "../ButtonGroup";
import { Select } from "../Select";

const HIDDEN_ARGS = [
  "theme",
  "forwardedAs",
  "as",
  "boxShadow",
  "borderRadius",
  "ref",
  "tooltip",
];

export default {
  title: "Design System/Select",
  component: Select,
  argTypes: {
    ...HIDDEN_ARGS.reduce((acc, arg) => {
      acc[arg] = { table: { disable: true } };
      return acc;
    }, {}),
  },
  parameters: {
    height: "32px",
    width: "120px",
  },
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/function-component-definition
const TemplateDefault = (args) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return <Select />;
};

export const DefaultStory = TemplateDefault.bind({});
DefaultStory.storyName = "Select";
