import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Collapsible } from "./Collapsible";
import { CollapsibleProps } from "./Collapsible.types";
import { Text } from "../Text";

export default {
  title: "Design System/Collapsible",
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          "Collapsibles can expand when clicked on. They allow you to hide content that is not immediately relevant to the user.",
      },
    },
  },
} as ComponentMeta<typeof Collapsible>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Collapsible> = (args) => {
  return <Collapsible {...args} />;
};

export const CollapsibleStory = Template.bind({});
CollapsibleStory.storyName = "Collapsible";
CollapsibleStory.args = {
  title: "This is a collapsible",
  isOpen: true,
  onHeaderClick: (isOpen: CollapsibleProps["isOpen"]) => {
    alert(`Collapsible ${isOpen ? "expanded" : "collapsed"}!`);
  },
  children: (
    <>
      <Text kind="body-m" renderAs="p">
        Here is some content
      </Text>
      <Text kind="body-m" renderAs="p">
        Here is some content
      </Text>
      <Text kind="body-m" renderAs="p">
        Here is some content
      </Text>
    </>
  ),
};
