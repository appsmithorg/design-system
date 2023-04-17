import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "./Icon";
import { IconCollection } from "./Icon.provider";
import { Text } from "../Text";

export default {
  title: "Design System/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon component which accepts name of any remix icon or any custom svg element.",
      },
    },
  },
  argTypes: {
    // adding this specifically to bring that sorting order in storybook
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Icon>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const IconStory = Template.bind({});
IconStory.storyName = "Icon";
IconStory.args = {
  name: "account-box-line",
  children: "",
  size: "md",
  withWrapper: false,
  wrapperColor: "rgba(0, 0, 0, 0.1)",
};

export function AllIcons() {
  return (
    <div style={{ width: "100%;", display: "flex", flexDirection: "column" }}>
      {IconCollection.map((icon, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "4rem",
          }}
        >
          <Icon color="var(--ads-v2-color-fg)" name={icon} size="lg" />
          <Text kind="body-m">{icon}</Text>
        </div>
      ))}
    </div>
  );
}

AllIcons.decorators = [
  (Story) => (
    <div style={{ height: "75%", width: "25%" }}>
      <Story />
    </div>
  ),
];
