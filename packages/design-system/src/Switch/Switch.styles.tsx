import styled, { css } from "styled-components";
import { Text } from "../Text";

const Variables = css`
  --switch-color-bg: var(--ads-v2-color-bg-emphasis);
  --thumb-color-bg: var(--ads-v2-color-bg);
`;

export const StyledSwitch = styled.span``;

export const StyledSwitchLabel = styled(Text)<{
  isDisabled?: boolean;
}>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;

  min-width: 9rem;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      opacity: var(--ads-v2-opacity-disabled);
    `}
`;

export const StyledSwitchInput = styled.input<{
  isDisabled?: boolean;
  isSelected?: boolean;
  isFocusVisible?: boolean;
}>`
  ${Variables};

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  // the pill
  width: 2rem;
  height: 1.25rem;
  min-width: 2rem;
  min-height: 1.25rem;

  display: grid;
  grid: [on] 1fr / [off] 1fr;

  padding: 2px;
  cursor: pointer;
  border-radius: 10px;
  background-color: var(--switch-color-bg);

  outline: none;

  ${({ isFocusVisible }) =>
    isFocusVisible &&
    `
        outline: var(--ads-v2-border-width-outline) solid var(--ads-v2-color-outline);
        outline-offset: var(--ads-v2-offset-outline);
    `}}

  &:hover {
    --switch-color-bg: var(--ads-v2-color-bg-emphasis-plus);
  }

  &:checked {
    justify-content: flex-end;
    --switch-color-bg: var(--ads-v2-color-bg-brand-secondary);

    // set position of thumb when checked
    &::before {
      grid-area: on;
      box-shadow: 0 1px 4px 0 var(--ads-v2-color-gray-900);
    }
  }

  &:checked:hover {
    --switch-color-bg: var(--ads-v2-color-bg-brand-secondary-emphasis)
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--ads-v2-opacity-disabled);

    &:hover {
      --switch-color-bg: var(--ads-v2-color-bg-emphasis);
    }

    &:checked:hover {
      --switch-color-bg: var(--ads-v2-color-bg-brand-secondary);
    }
  }

  // the thumb
  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    grid-area: off;
    border-radius: var(--ads-border-radius-circle);
    background-color: var(--thumb-color-bg);

    box-shadow: 0 1px 4px 0 rgba(76, 86, 100, 0.2);
}
`;
