import React from "react";
import styled from "styled-components";
import { ISwitchProps, Switch } from "@blueprintjs/core";
import { replayHighlightClass } from "Constants/classes";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error type
const StyledSwitch = styled(Switch)<{
  children?: React.ReactNode;
}>`
  &&&&& input:checked ~ span {
    background: var(--ads-old-color-gray-10);
  }

  & input:focus + .bp3-control-indicator {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2) !important;
  }
`;

export default function AdsSwitch(props: ISwitchProps) {
  return (
    <StyledSwitch
      {...props}
      className={
        props.className
          ? props.className + " " + replayHighlightClass
          : replayHighlightClass
      }
      tabIndex={0}
    />
  );
}
