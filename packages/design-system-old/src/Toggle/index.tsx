import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "Spinner";
import { CommonComponentProps } from "Types/common";
import { Classes } from "Constants/classes";

export type ToggleProps = CommonComponentProps & {
  name?: string;
  onToggle: (value: boolean) => void;
  value: boolean;
};

const StyledToggle = styled.label<{
  isLoading?: boolean;
  disabled?: boolean;
  value: boolean;
}>`
  position: relative;
  display: block;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    background-color: ${(props) =>
      props.isLoading
        ? "var(--ads-toggle-slider-loading-background-color)"
        : "var(--ads-toggle-slider-background-color)"};
    transition: 0.4s;
    width: 46px;
    height: 23px;
    border-radius: 92px;
  }

  ${(props) =>
    props.isLoading
      ? `.toggle-spinner {
      position: absolute;
      top: 3px;
      left: 17px;
    }
    .slider:before {
      display: none;
    }`
      : `.slider:before {
      position: absolute;
      content: "";
      height: 19px;
      width: 19px;
      top: 2px;
      left: 2px;
      background-color: ${
        props.disabled && !props.value
          ? "var(--ads-toggle-slider-disabled-off-background-color)"
          : "var(--ads-toggle-slider-disabled-on-background-color)"
      };
      box-shadow: ${
        props.value
          ? "1px 0px 3px rgba(0, 0, 0, 0.16)"
          : "-1px 0px 3px rgba(0, 0, 0, 0.16)"
      };
      opacity: ${props.value ? 1 : 0.9};
      transition: .4s;
      border-radius: 50%;
    }`}

  && input:hover + .slider:before {
    opacity: 1;
  }

  input:focus + .slider:before {
    opacity: 0.67;
  }

  input:disabled + .slider:before {
    opacity: 0.78;
  }

  input:checked + .slider:before {
    transform: translateX(23px);
  }

  input:checked + .slider {
    background-color: var(--ads-toggle-on-background-color);
  }

  input:hover + .slider,
  input:focus + .slider {
    background-color: ${(props) =>
      props.value
        ? "var(--ads-toggle-hover-on-background-color)"
        : "var(--ads-toggle-hover-off-background-color)"};
  }

  input:disabled + .slider {
    cursor: not-allowed;
    background-color: ${(props) =>
      !props.isLoading
        ? props.value
          ? "var(--ads-toggle-disabled-on-background-color)"
          : "var(--ads-toggle-disabled-off-background-color)"
        : "var(--ads-toggle-slider-loading-background-color)"};
  }

  .${Classes.SPINNER} {
    circle {
      stroke: var(--ads-toggle-spinner-stroke-color);
    }
  }
`;

export default function Toggle(props: ToggleProps) {
  const { onToggle } = props;
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChangeHandler = (value: boolean) => {
    setValue(value);
    onToggle && onToggle(value);
  };

  return (
    <StyledToggle
      className={props.className}
      data-cy={props.cypressSelector}
      disabled={props.disabled}
      isLoading={props.isLoading}
      value={value}
    >
      <input
        checked={value}
        disabled={props.disabled || props.isLoading}
        name={props.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e.target.checked)
        }
        type="checkbox"
        value={value ? "true" : "false"}
      />
      <span className="slider" />
      {props.isLoading ? (
        <div className="toggle-spinner">
          <Spinner />
        </div>
      ) : null}
    </StyledToggle>
  );
}
