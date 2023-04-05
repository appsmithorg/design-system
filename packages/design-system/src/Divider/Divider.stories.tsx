import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Divider } from "./Divider";
import styled from "styled-components";

export default {
  title: "Design System/Divider",
  component: Divider,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Divider>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Divider> = (args) => {
  return (
    <Box>
      <Divider {...args} />
    </Box>
  );
};

const Box = styled.div`
  width: 40vh;
  height: 40vh;
  border: 1px solid var(--ads-v2-color-border);
  border-radius: var(--ads-v2-border-radius);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerStory = Template.bind({});
DividerStory.storyName = "Divider";
