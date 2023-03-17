import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from "./Select";

export default {
  title: "Design System/Select",
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Select> = (args) => {
  return <Select />;
};

export const SelectStory = Template.bind({});
SelectStory.storyName = "Select";
SelectStory.args = {
  //add arguments here
};
