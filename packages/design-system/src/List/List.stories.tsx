import React from "react";

import { List, ListItem } from "./List";

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
const ListTemplate = (args) => {
  return <List {...args} />;
};

export const ListStory = ListTemplate.bind({});
ListStory.storyName = "List";
ListStory.args = {
  items: [
    {
      startIcon: "box-3-line",
      title: "Action item 1",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 2",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 3",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 4",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 5",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 6",
    },
    {
      startIcon: "box-3-line",
      title: "Action item 7",
    },
  ],
};

function ListItemTemplate(args) {
  return <ListItem {...args} />;
}
export const ListItemLargeStory = ListItemTemplate.bind({});
ListItemLargeStory.storyName = "List item size large";
ListItemLargeStory.args = {
  startIcon: "box-3-line",
  title: "Action item 1",
  description: "block",
  descriptionType: "block",
  size: "lg",
};

export const ListItemErrorStory = ListItemTemplate.bind({});
ListItemErrorStory.storyName = "List item with error";
ListItemErrorStory.args = {
  startIcon: "box-3-line",
  title: "Action item 1",
  hasError: true,
};

export const ListItemDisabledStory = ListItemTemplate.bind({});
ListItemDisabledStory.storyName = "List item disabled";
ListItemDisabledStory.args = {
  title: "Action item 1",
  disabled: true,
};

export const ListItemInlineDescStory = ListItemTemplate.bind({});
ListItemInlineDescStory.storyName = "List item inline description";
ListItemInlineDescStory.args = {
  title: "Action item 1",
  description: "inline",
};

export const ListItemBlockDescStory = ListItemTemplate.bind({});
ListItemBlockDescStory.storyName = "List item block description";
ListItemBlockDescStory.args = {
  title: "Action item 1",
  description: "block",
  descriptionType: "block",
};

export const ListItemOverflowStory = ListItemTemplate.bind({});
ListItemOverflowStory.storyName = "List item title overflow";
ListItemOverflowStory.args = {
  title: "Action item 1 Action item 1 Action item 1 Action item 1",
};

export const ListItemEndIconStory = ListItemTemplate.bind({});
ListItemEndIconStory.storyName = "List item end icon";
ListItemEndIconStory.args = {
  title: "Action item 1",
  endIcon: "open",
};
