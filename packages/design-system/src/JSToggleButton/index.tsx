import React from "react";
import styled from "styled-components";
import { IconWrapper } from "Icon";
import { ControlIcons } from "ControlIcons";

const JSToggleButtonWrapper = styled.button<{ active: boolean }>`
  --ads-js-toggle-button-default-border-color: var(--ads-color-gray-300);
  --ads-js-toggle-button-default-background-color: var(--ads-color-white);
  --ads-js-toggle-button-disabled-border-color: var(--ads-color-border-disabled);
  --ads-js-toggle-button-disabled-background-color: var(--ads-color-brand-secondary-disabled);
  --ads-js-toggle-button-active-disabled-background-color: var(--ads-color-brand-secondary-disabled);
  --ads-js-toggle-button-active-border-color: var(--ads-color-brand-secondary);
  --ads-js-toggle-button-active-background-color: var(--ads-color-brand-secondary);
  --ads-js-toggle-button-hover-active-background-color: var(--ads-color-brand-secondary);
  --ads-js-toggle-button-hover-background-color: var(--ads-color-brand-secondary-hover);
  --ads-js-toggle-button-hover-disabled-active-background-color: var(--ads-color-brand-secondary);
  --ads-js-toggle-button-hover-disabled-background-color: var(--ads-color-black-200);
  --ads-js-toggle-button-svg-path-active-fill-color: var(--ads-color-white);
  --ads-js-toggle-button-svg-path-fill-color: var(--ads-color-text);

  margin: 4px;
  margin-top: 0px;
  cursor: pointer;
  overflow: hidden;

  & ${IconWrapper} {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  height: auto;
  width: 28px;
  height: 16px;
  border-radius: var(--ads-border-radius);
  border: 0.5px solid
    ${(props) =>
      props.disabled
        ? "var(--ads-js-toggle-button-disabled-border-color)"
        : "var(--ads-js-toggle-button-default-border-color)"};
  ${(props) => {
    if (props.active) {
      return `
        border-color: var(--ads-js-toggle-button-active-border-color);
      `;
    }
  }}
  background-color: ${(props) =>
    props.active
      ? props.disabled
        ? "var(--ads-js-toggle-button-active-disabled-background-color)"
        : "var(--ads-js-toggle-button-active-background-color )"
      : props.disabled
      ? "var(--ads-js-toggle-button-disabled-background-color)"
      : "var(--ads-js-toggle-button-default-background-color)"};

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? props.active
          ? "var(--ads-js-toggle-button-hover-disabled-active-background-color)"
          : "var(--ads-js-toggle-button-hover-disabled-background-color)"
        : props.active
        ? "var(--ads-js-toggle-button-hover-active-background-color)"
        : "var(--ads-js-toggle-button-hover-background-color)"};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &&& svg {
    width: 28px;
    height: 16px;
    transform: scale(1.4);

    rect {
      fill: transparent;
    }

    path {
      fill: ${(props) =>
        props.active
          ? "var(--ads-js-toggle-button-svg-path-active-fill-color)"
          : "var(--ads-js-toggle-button-svg-path-fill-color)"};
    }
  }
`;

type JSToggleButtonProps = {
  isActive: boolean;
  isToggleDisabled?: boolean;
  handleClick: (_: any) => void;
  cypressSelector?: string;
};

function JSToggleButton(props: JSToggleButtonProps) {
  return (
    <JSToggleButtonWrapper
      active={props.isActive}
      className={`focus:ring-2 t--js-toggle ${props.isActive ? "is-active" : ""}
      ${props.cypressSelector}
      `}
      disabled={props.isToggleDisabled}
      onClick={props.handleClick}
    >
      <ControlIcons.JS_TOGGLE />
    </JSToggleButtonWrapper>
  );
}

export default JSToggleButton;
