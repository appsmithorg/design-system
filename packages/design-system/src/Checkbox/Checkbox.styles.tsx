import styled, { css } from "styled-components";

const Variables = css`
  --checkbox-color-label: var(--ads-v2-color-fg);
  --checkbox-color-border: var(--ads-v2-color-border);
  --checkbox-color-background: var(--ads-v2-color-bg);
  --checkbox-color-background-checkmark: var(
    --ads-v2-color-fg-on-brand-secondary
  );
`;

const Checkbox = css`
  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    left: 0;
  }

  & > * {
    cursor: pointer;
  }

  & {
    cursor: pointer;
    position: relative;
    padding-left: var(--ads-v2-spaces-7);
    font-family: var(--ads-v2-font-family);
    color: var(--checkbox-color-label);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    width: 16px;
    height: 16px;
    border: 1px solid var(--ads-v2-color-border);
    border-radius: var(--ads-v2-border-radius);
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    width: 16px;
    height: 16px;
    border-radius: var(--ads-v2-border-radius);
    background-color: var(--ads-v2-color-bg-brand-secondary);
    border: 1px solid var(--ads-v2-color-bg-brand-secondary);
    box-sizing: border-box;
    transform: scale(0);
    transition: transform 0.2s ease;
    z-index: 1;
  }

  &:hover::before {
    border-color: var(--ads-v2-color-border-emphasis);
  }

  &:hover::after {
    background-color: var(--ads-v2-color-bg-brand-secondary-emphasis);
    border: 1px solid var(--ads-v2-color-border-brand-secondary-emphasis);
  }

  label {
    user-select: none;
    cursor: pointer;
  }

  label::after {
    content: "";
    opacity: 0;
    position: absolute;
    left: 3px;
    top: 11px;
    width: 5px;
    height: var(--ads-v2-spaces-1);
    border-radius: 4px;
    background-color: var(--checkbox-color-background-checkmark);
    transform: rotateZ(48deg);
    z-index: 2;
  }

  input[type="checkbox"]:checked + label::after {
    opacity: 1;
  }

  label::before {
    content: "";
    opacity: 0;
    position: absolute;
    left: 4px;
    top: 9px;
    width: 10px;
    height: var(--ads-v2-spaces-1);
    border-radius: 4px;
    background-color: var(--checkbox-color-background-checkmark);
    transform: rotateZ(304deg);
    z-index: 2;
  }

  input[type="checkbox"]:checked + label::before {
    opacity: 1;
  }
`;

export const StyledCheckbox = styled.span<{
  isChecked: boolean;
  isIndeterminate?: boolean;
  isFocusVisible?: boolean;
  isDisabled?: boolean;
}>`
  ${Variables};

  ${Checkbox}

  ${({ isChecked }) => {
    if (isChecked) {
      return css`
        &::after {
          transform: scale(1);
        }
      `;
    }
  }}

  ${({ isIndeterminate }) => {
    if (isIndeterminate) {
      return css`
        &::after {
          transform: scale(1);
        }
        label::after {
          opacity: 1;
          left: 3px;
          top: 9px;
          width: 10px;
          transform: rotateZ(0deg);
        }

        label::before {
          display: none;
        }
      `;
    }
  }}

  ${({ isFocusVisible }) => {
    if (isFocusVisible === true) {
      return css`
        &::before {
          outline: var(--ads-v2-border-width-outline) solid
            var(--ads-v2-color-outline);
          outline-offset: var(--ads-v2-offset-outline);
        }
      `;
    }
  }}

  ${({ isDisabled }) => {
    if (isDisabled === true) {
      return css`
        opacity: var(--ads-v2-opacity-disabled);
        &,
        & > * {
          cursor: not-allowed !important;
          pointer-events: none;
        }
      `;
    }
  }}
`;
