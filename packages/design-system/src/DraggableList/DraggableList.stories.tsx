import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DraggableList } from "./DraggableList";
import styled from "styled-components";

const StoryDecorator = styled.div`
  width: 80vw;
  height: 80vh;
  padding: 1rem;

  & > div {
    height: 100% !important;
    padding: 8px;
  }
`;
export default {
  title: "Design System/DraggableList",
  component: DraggableList,
  decorators: [
    (Story) => (
      <StoryDecorator>
        <Story />
      </StoryDecorator>
    ),
  ],
} as ComponentMeta<typeof DraggableList>;

const ItemRenderer = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  cursor: grab;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.45);
  background-color: var(--ads-color-black-5);
`;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DraggableList> = (args) => {
  return <DraggableList {...args} />;
};
export const DraggableListStory = Template.bind({});
DraggableListStory.storyName = "DraggableList";
DraggableListStory.args = {
  items: [
    {
      id: 1,
      name: "Item 1",
      isDragDisabled: true,
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
  ],
  keyAccessor: "id",
  onUpdate: (items) => {
    // eslint-disable-next-line no-console
    console.log(items);
  },
  ItemRenderer: ({ item }) => <ItemRenderer>{item.name}</ItemRenderer>,
  itemHeight: 70,
  shouldReRender: false,
};
