import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { ToggleButton } from "./ToggleButton";
import { ToggleButtonTestID } from "./ToggleButton.constants";

export default {
  title: "Design System/Toggle Button/Toggle Button",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ToggleButton> = (args) => {
  return <ToggleButton {...args} />;
};

export const ToggleButtonStory = Template.bind({});
ToggleButtonStory.storyName = "Toggle Button";
ToggleButtonStory.args = {
  size: "sm",
  icon: "js-toggle-v2",
};

export const ToggleButtonInteraction = {
  args: {
    ...ToggleButtonStory.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // this should become a utilty function? Or a one liner.
    const getToggleButton = (testId) => canvas.findByTestId(testId);

    const itemToInteractWith = await getToggleButton(ToggleButtonTestID);
    console.log(itemToInteractWith, "ixn item");
    await userEvent.click(itemToInteractWith);

    const itemToAssert = await getToggleButton(ToggleButtonTestID);
    console.log(itemToAssert, "assert item");
    // assert that this item has the data-selected = true
    await expect(itemToAssert).toBeInTheDocument();
    await expect(itemToAssert).toHaveAttribute("data-selected", "true");
  },
};

// In this test, we have used the `findByTestId` function, which is the least preferred way to select an element
// https://testing-library.com/docs/queries/bytestid
// To select our elements the way a screen reader would, which is the preferred way of doing things in testing-library,
// each component may need to be rewritten based on what tags and attributes the underlying html element does and does not support.
// It is this effort that will contribute to the robustness of our components.
