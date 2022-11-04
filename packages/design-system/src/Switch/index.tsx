import React from "react";
import styled from "styled-components";
import { ISwitchProps, Switch } from "@blueprintjs/core";
import { replayHighlightClass } from "Constants/classes";

const StyledSwitch = styled(Switch)`
  &&&&& input:checked ~ span {
    background: var(--ads-color-brand-secondary);
  }

  &&&&& input:checked:disabled ~ span {
    background: var(--ads-color-gray-300);
  }

  & input:focus + .bp3-control-indicator {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2) !important;
  }

  &&&&& .bp3-control-indicator::before {
    box-shadow: none;
  }

  &&&&& input ~ .bp3-control-indicator {
    background: var(--ads-color-brand-secondary-normal);

    &:hover {
      background: var(--ads-color-gray-300);
    }

    &:disabled {
      &:before {
        background: var(--ads-color-gray-100);
      }
      background: var(--ads-color-gray-300);
    }
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
