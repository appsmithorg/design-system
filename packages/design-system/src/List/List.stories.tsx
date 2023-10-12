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

const ListItemArgTypes = {
  title: {
    control: "text",
    description: "The title/label of the list item",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  startIcon: {
    control: "text",
    description: "The icon to display before the list item title.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  endIcon: {
    control: "text",
    description: "The icon to display at the end of the list item",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  description: {
    control: "text",
    description: "Description text to be shown alongside the title",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  descriptionType: {
    description:
      "`inline` type will show the description beside the title. `block` type will show the description below the title.",
    control: "radio",
    options: ["inline", "block"],
    defaultValue: "inline",
  },
  size: {
    description: "Size of the list item",
    control: "radio",
    options: ["md", "lg"],
    defaultValue: "md",
  },
  hasError: {
    control: {
      type: "boolean",
    },
    description: "Whether the item is to be indicated as having an error",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  isDisabled: {
    control: {
      type: "boolean",
    },
    description: "Whether the item is disabled",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  onClick: {
    description: "callback for when the list item is clicked",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
  onEndIconClick: {
    description: "callback for when the end icon is clicked",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
};

function ListItemTemplate(args) {
  return <ListItem {...args} />;
}
export const ListItemLargeStory = ListItemTemplate.bind({});
ListItemLargeStory.storyName = "List item size large";
ListItemLargeStory.argTypes = ListItemArgTypes;
ListItemLargeStory.args = {
  startIcon: "box-3-line",
  title: "Action item 1",
  description: "inline",
  descriptionType: "inline",
  size: "lg",
  endIcon: "open",
};

export const ListItemErrorStory = ListItemTemplate.bind({});
ListItemErrorStory.storyName = "List item with error";
ListItemErrorStory.argTypes = ListItemArgTypes;
ListItemErrorStory.args = {
  startIcon: "box-3-line",
  title: "Action item 1",
  hasError: true,
  onClick: () => alert("Clicked"),
};

export const ListItemDisabledStory = ListItemTemplate.bind({});
ListItemDisabledStory.storyName = "List item disabled";
ListItemDisabledStory.argTypes = ListItemArgTypes;
ListItemDisabledStory.args = {
  title: "Action item 1",
  isDisabled: true,
  onClick: () => alert("Clicked"),
};

export const ListItemInlineDescStory = ListItemTemplate.bind({});
ListItemInlineDescStory.storyName = "List item inline description";
ListItemInlineDescStory.argTypes = ListItemArgTypes;
ListItemInlineDescStory.args = {
  title: "Action item 1",
  description: "inline",
};

export const ListItemBlockDescStory = ListItemTemplate.bind({});
ListItemBlockDescStory.storyName = "List item block description";
ListItemBlockDescStory.argTypes = ListItemArgTypes;
ListItemBlockDescStory.args = {
  title: "Action item 1",
  description: "block",
  descriptionType: "block",
};

export const ListItemOverflowStory = ListItemTemplate.bind({});
ListItemOverflowStory.storyName = "List item title overflow";
ListItemOverflowStory.argTypes = ListItemArgTypes;
ListItemOverflowStory.args = {
  title: "Action item 1 Action item 1 Action item 1 Action item 1",
};

export const ListItemEndIconStory = ListItemTemplate.bind({});
ListItemEndIconStory.storyName = "List item end icon";
ListItemEndIconStory.argTypes = ListItemArgTypes;
ListItemEndIconStory.args = {
  title: "Action item 1",
  endIcon: "open",
};
