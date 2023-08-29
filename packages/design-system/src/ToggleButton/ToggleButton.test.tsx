import React from "react";
import { ToggleButtonTestID } from "./ToggleButton.constants";
import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
  RenderResult,
} from "@testing-library/react";
import { ToggleButton } from "./ToggleButton";

describe("ToggleButton Component", () => {
  it("should be selected when clicked", () => {
    const { getByTestId } = render(
      <ToggleButton
        data-testid="toggle-button"
        icon="js-toggle-v2"
        size="sm"
      />,
    );

    const toggleButton = getByTestId("toggle-button");

    expect(toggleButton).not.toHaveAttribute("aria-selected", "true");

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-selected", "true");
  });
});

// test("check if clicking the toggle button sets the state to true", () => {
//   // this should become a utilty function? Or a one liner.
//   const getToggleButton = (testId) => canvas.findByTestId(testId);
//
//   const itemToInteractWith = getToggleButton(ToggleButtonTestID);
//   console.log(itemToInteractWith, "ixn item");
//   userEvent.click(itemToInteractWith);
//
//   const itemToAssert = getToggleButton(ToggleButtonTestID);
//   console.log(itemToAssert, "assert item");
//   // assert that this item has the data-selected = true
//   expect(itemToAssert).toBeInTheDocument();
//   expect(itemToAssert).toHaveAttribute("data-selected", "true");
// });
