import React from "react";

import { List } from "./List";

export default {
  title: "Design System/List",
  component: List,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "350px",
          margin: "0 auto",
          height: "200px",
        }}
      >
        {Story()}
      </div>
    ),
  ],
};

// eslint-disable-next-line react/function-component-definition
const Template = (args) => {
  return <List {...args} />;
};

export const ListStory = Template.bind({});
ListStory.storyName = "List";
ListStory.args = {
  items: [
    {
      startIcon: "box-3-line",
      title: "Action item 1",
      endIcon: "arrow-right-s-line",
      description: "inline",
      descriptionType: "inline",
      size: "lg",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 2",
      endIcon: "comment-context-menu",
      description: "inline",
      descriptionType: "inline",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 3",
      endIcon: "arrow-right-s-line",
      hasError: true,
    },
    {
      startIcon: "box-3-line",
      title: "Action item 4",
      endIcon: "arrow-right-s-line",
      isDisabled: true,
    },
    {
      startIcon: "box-3-line",
      title: "Action item 5",
      endIcon: "arrow-right-s-line",
    },
    {
      startIcon: "box-3-line",
      title:
        "Action item 6 Action item 6 Action item 6 Action item 6 Action item 6",
      description: "block",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 7",
      description:
        "block more text more text more text more text more text more text more text more text more text more text more text more text more text more text more text",
    },
  ],
};
