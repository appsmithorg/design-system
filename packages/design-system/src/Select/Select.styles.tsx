import styled, { css } from "styled-components";
import SelectComponent from "rc-select";
import { SelectProps, SelectSizes } from "./Select.types";

const Variables = css`
  --select-color-border: var(--ads-v2-color-border);
  --select-padding-x: var(--ads-v2-spaces-2); // padding left and right
  --select-padding-y: var(--ads-v2-spaces-2); // padding top and bottom
  --select-color: var(--ads-v2-color-fg);
  --select-font-size: var(--ads-v2-font-size-2);
  --select-height: 22px;
  --select-search-input-padding-right: 0;
`;

const getSizes = (size: SelectSizes) => {
  const Sizes = {
    sm: css`
      --select-padding-x: var(--ads-v2-spaces-2);
      --select-padding-y: var(--ads-v2-spaces-2);
      --select-font-size: var(--ads-v2-font-size-2);
      --select-height: 22px;
    `,
    md: css`
      --select-padding-x: var(--ads-v2-spaces-3);
      --select-padding-y: var(--ads-v2-spaces-3);
      --select-font-size: var(--ads-v2-font-size-4);
      --select-height: 36px;
    `,
  };

  return Sizes[size];
};

export const StyledSelect = styled(SelectComponent)<SelectProps>`
  ${Variables}

  font-family: var(--ads-v2-font-family);
  font-size: var(--select-font-size);
  border-radius: var(--ads-v2-border-radius);
  width: 100%;

  /* Size style */
  ${({ size }) => size && getSizes(size)}

  /* Disabled */
  &&.rc-select-disabled * {
    opacity: var(--ads-v2-opacity-disabled);
    cursor: not-allowed;
  }

  &&.rc-select-focused {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
    --select-color-border: var(--ads-v2-color-border-emphasis-plus);
  }

  &:hover {
    --select-color-border: var(--ads-v2-color-border-emphasis);
  }

  /* Selector */
  && > .rc-select-selector {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--select-height);
    width: 100%;
    min-width: 180px;
    color: var(--select-color);
    border: 1px solid var(--select-color-border);
    padding: var(--select-padding-y) var(--select-padding-x);
    border-radius: var(--ads-v2-border-radius);

    /* Placeholder */
    & > .rc-select-selection-placeholder,
    & > .rc-select-selection-item {
      padding: var(--select-padding-y) var(--select-padding-x);
      padding-right: calc(var(--select-padding-x) + 20px);
      color: var(--ads-v2-color-fg-subtle);
      left: 0;
      top: ${({ size }) => (size === "sm" ? "-1px" : "0")};
      height: 100%;
      width: 100%;
      display: inline-block;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Selected Item */
    & > .rc-select-selection-item {
      color: var(--select-color);
    }

    /* Search Input */
    & .rc-select-selection-search-input {
      color: var(--select-color);
      font-family: var(--ads-v2-font-family);
      font-size: var(--select-font-size);
      padding-right: var(--select-search-input-padding-right);
    }
  }

  /* Arrow */
  && > .rc-select-arrow,
  && > .rc-select-clear {
    color: var(--select-color);
    top: 0;
    right: var(--select-padding-x);
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-top: 1px;
    padding-bottom: 1px;
    cursor: pointer;
  }

  /* Clear Icon */
  && > .rc-select-clear {
    right: calc(var(--select-padding-x) + 20px);
  }

  /* Calculate padding right of input */
  &&.rc-select-allow-clear .rc-select-selection-search-input,
  &&.rc-select-show-arrow .rc-select-selection-search-input {
    /* padding x + icon size + gap */
    --select-search-input-padding-right: calc(var(--select-padding-x) + 16px);
  }
  &&.rc-select-allow-clear.rc-select-show-arrow
    .rc-select-selection-search-input {
    /* padding x + icon size + gap + icon size */
    --select-search-input-padding-right: calc(
      var(--select-padding-x) + 20px + 16px
    );
  }
`;
