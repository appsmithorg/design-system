import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";

import { DraggableList as DraggableListComponent } from "./index";

const StoryDecorator = styled.div`
  width: 80vw;
  height: 80vh;
  padding: 1rem;

  & > div {
    height: 100% !important;
    padding: 8px;
  }
`;

const ItemRenderer = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  cursor: grab;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.45);
  background-color: var(--ads-color-black-5);
`;

export default {
  title: "Design System/DraggableList",
  component: DraggableListComponent,
  decorators: [
    (Story) => (
      <StoryDecorator>
        <Story />
      </StoryDecorator>
    ),
  ],
} as ComponentMeta<typeof DraggableListComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DraggableListComponent> = (args) => {
  return <DraggableListComponent {...args} canFreeze />;
};

export const DraggableList = Template.bind({});

const draggableListRenderItem = ({ item }) => {
  return <ItemRenderer>{item.name}</ItemRenderer>;
};

DraggableList.args = {
  items: [
    {
      index: 0,
      name: "Item 1",
      sticky: "left",
    },
    {
      index: 1,
      name: "Item 2",
      sticky: undefined,
    },
    {
      index: 2,
      name: "Item 3",
      sticky: undefined,
    },
    {
      index: 3,
      name: "Item 4",
      sticky: undefined,
    },
    {
      index: 4,
      name: "Item 5",
      sticky: "right",
    },
  ],
  keyAccessor: "id",
  onUpdate: (items) => {
    // eslint-disable-next-line no-console
    console.log(items);
  },
  ItemRenderer: draggableListRenderItem,
  itemHeight: 70,
  shouldReRender: false,
};
