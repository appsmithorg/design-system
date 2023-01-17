import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SearchSnippets, { ENTITY_TYPE } from "./index";

export default {
  title: "Design System/SearchSnippets",
  component: SearchSnippets,
} as ComponentMeta<typeof SearchSnippets>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SearchSnippets> = (args) => {
  return <SearchSnippets {...args} />;
};

export const SearchSnippetsExample = Template.bind({});
SearchSnippetsExample.storyName = "SearchSnippets";
SearchSnippetsExample.args = {
  entityType: ENTITY_TYPE.ACTION,
  entityId: 23,
  onClick: () => console.log("click"),
};
