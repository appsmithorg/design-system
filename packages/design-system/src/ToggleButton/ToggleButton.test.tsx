import React from "react";
import { ToggleButtonTestID } from "./ToggleButton.constants";
import {
  findByTestId,
  fireEvent,
  render,
  RenderResult,
} from "@testing-library/react";
import { ToggleButton } from "./ToggleButton";
import '@testing-library/jest-dom';

describe("given a default toggle button", () => {
  let rendered: RenderResult;
  let toggleButton: HTMLElement;
  let itemToAssert: HTMLElement;

  beforeEach(() => {
    rendered = render(<ToggleButton icon="js-toggle-v2" size="sm" />);
  });

  describe("when clicking the toggle button", () => {
    beforeEach(async () => {
      // fireEvent.click(toggleButton);
      // itemToAssert = await findByTestId(toggleButton, ToggleButtonTestID);
    });

    it.only("should render a selected toggle button", () => {
      // console.log(itemToAssert, "asrt item");
      // console.log(rendered, "rndr item");
      expect(true).toEqual(true)
      expect(itemToAssert).toHaveAttribute("data-selected", "true");
    });
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
