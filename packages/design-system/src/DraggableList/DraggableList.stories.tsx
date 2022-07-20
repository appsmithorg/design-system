import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DraggableList as DraggableListComponent } from "./index";

export default {
  title: "Design System/DraggableList",
  component: DraggableListComponent,
} as ComponentMeta<typeof DraggableListComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DraggableListComponent> = (args) => {
  return <DraggableListComponent {...args} />;
};

export const DraggableList = Template.bind({});
DraggableList.args = {
  items: [
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
  ],
  keyAccessor: "id",
  onUpdate: (items) => {
    // eslint-disable-next-line no-console
    console.log(items);
  },
};
