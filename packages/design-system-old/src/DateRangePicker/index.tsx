import React from "react";
import styled from "styled-components";
import { Classes as BP_Classes } from "@blueprintjs/core";
import { DateRangeInput, IDateRangeInputProps } from "@blueprintjs/datetime";
import omit from "lodash-es/omit";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "./styles.css";

const DS_DateRangePicker = styled(DateRangeInput)<{
  height?: string;
  width?: string;
}>`
  border: 1px solid var(--ads-v2-color-border);
  border-radius: var(--ads-v2-border-radius);
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: none;

  &.bp3-popover-wrapper {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
  }

  &:focus-within {
    border-color: unset;
  }

  & .${BP_Classes.CONTROL_GROUP} > .${BP_Classes.INPUT_GROUP} {
    border-radius: var(--ads-v2-border-radius);
    height: 100%;

    & > input {
      height: 36px;
      align-items: center;
      box-shadow: none;
    }
  }

  & .${BP_Classes.CONTROL_GROUP} > .${BP_Classes.INPUT_GROUP}:first-child {
    position: relative;

    &:after {
      content: "→";
      position: absolute;
      top: 0;
      right: 0;
      color: var(--ads-v2-color-fg);
      z-index: 100;
      height: 100%;
      display: flex;
      align-items: center;
      padding: var(--ads-dimensions-2) 0;
    }
  }
`;

type DateRangePickerProps = IDateRangeInputProps & {
  className?: string;
  height?: string;
  width?: string;
};

function DateRangePicker(props: DateRangePickerProps) {
  const className = props.className ? props.className : "";
  const height = props.height;
  const width = props.width;
  const filteredProps = omit(props, [
    "className",
    "closeOnSelection",
    "height",
    "highlightCurrentDay",
    "popoverProps",
    "width",
  ]);
  return (
    <DS_DateRangePicker
      allowSingleDayRange
      className={"ds--date-range-picker " + className}
      closeOnSelection
      height={height}
      highlightCurrentDay
      popoverProps={{
        minimal: true,
        popoverClassName: "ds--date-range-picker-popover",
      }}
      width={width}
      {...filteredProps}
    />
  );
}

export { DateRangePicker, DateRangePickerProps };
