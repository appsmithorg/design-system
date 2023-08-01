import styled, { css } from "styled-components";

const Variables = css`
  /* This is a category level token.Since this is specific to checkbox, it is added here. */
  --ads-v2-colors-control-checkbox-icon-checked-fg: var(
    --ads-v2-color-fg-on-brand-secondary
  );

  --checkbox-color-label: var(--ads-v2-colors-control-label-default-fg);
  --checkbox-color-border: var(--ads-v2-colors-control-field-default-border);
  --checkbox-color-background: var(--ads-v2-colors-control-field-default-bg);
`;

const Checkbox = css`
  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    left: 0;
  }

  cursor: pointer;
  position: relative;
  padding-left: var(--ads-v2-spaces-7);
  font-family: var(--ads-v2-font-family);
  font-size: 14px;
  color: var(--checkbox-color-label);
  display: flex;
  align-items: start;
  justify-content: start;
  user-select: none;
  line-height: initial;

  & > * {
    cursor: pointer;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 1px solid var(--checkbox-color-border);
    border-radius: var(--ads-v2-border-radius);
    box-sizing: border-box;
    background-color: var(--checkbox-color-background);
    transition: background-color 200ms ease, border 200ms ease;
  }

  input[type="checkbox"]:checked + span {
    --checkbox-color-border: var(--ads-v2-colors-control-field-checked-border);
    --checkbox-color-background: var(--ads-v2-colors-control-field-checked-bg);
  }

  span::after {
    content: "";
    opacity: 0;
    position: absolute;
    left: 2px;
    top: 8px;
    width: 5px;
    height: var(--ads-v2-spaces-1);
    border-radius: 4px;
    background-color: var(--ads-v2-colors-control-checkbox-icon-checked-fg);
    transform: rotateZ(48deg);
    z-index: 2;
  }

  input[type="checkbox"]:checked + span::after {
    opacity: 1;
  }

  span::before {
    content: "";
    opacity: 0;
    position: absolute;
    left: 3px;
    top: 6px;
    width: 10px;
    height: var(--ads-v2-spaces-1);
    border-radius: 4px;
    background-color: var(--ads-v2-colors-control-checkbox-icon-checked-fg);
    transform: rotateZ(304deg);
    z-index: 2;
  }

  input[type="checkbox"]:checked + span::before {
    opacity: 1;
  }
`;

export const StyledCheckbox = styled.label<{
  isChecked: boolean;
  isIndeterminate?: boolean;
  isFocusVisible?: boolean;
  isDisabled?: boolean;
}>`
  ${Variables};

  ${Checkbox}

  ${({ isIndeterminate }) => {
    if (isIndeterminate) {
      return css`
        span {
          --checkbox-color-border: var(
            --ads-v2-colors-control-field-checked-border
          );
          --checkbox-color-background: var(
            --ads-v2-colors-control-field-checked-hover-bg
          );
        }

        span::after {
          opacity: 1;
          left: 2px;
          top: 6px;
          width: 10px;
          transform: rotateZ(0deg);
        }

        span::before {
          display: none;
        }
      `;
    }
  }}

  ${({ isFocusVisible }) => {
    if (isFocusVisible === true) {
      return css`
        span {
          outline: var(--ads-v2-border-width-outline) solid
            var(--ads-v2-color-outline);
          outline-offset: var(--ads-v2-offset-outline);
        }
      `;
    }
  }}

  ${({ isChecked, isDisabled }) => {
    if (isDisabled) {
      return css`
        opacity: var(--ads-v2-opacity-disabled);
        &,
        & > * {
          cursor: not-allowed !important;
        }
      `;
    } else {
      return isChecked
        ? css`
            &:hover > span {
              --checkbox-color-background: var(
                --ads-v2-colors-control-field-checked-hover-bg
              ) !important;
              --checkbox-color-border: var(
                --ads-v2-colors-control-field-checked-hover-border
              ) !important;
            }
          `
        : css`
            &:hover > span {
              --checkbox-color-border: var(
                --ads-v2-colors-control-field-hover-border
              );
            }
          `;
    }
  }}
`;
