import styled, { css } from "styled-components";
import { Text } from "../Text";

const Variables = css`
  --switch-border-radius: var(--ads-v2-pill-border-radius);
  --switch-color-bg: var(--ads-v2-color-bg-emphasis);
  --thumb-color-bg: var(--ads-v2-color-bg);
`;

export const StyledSwitch = styled.span`
`;

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
}>`
  ${Variables};

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  width: 2rem;
  height: 1.25rem;

  display: grid;
  grid: [on] 1fr / [off] 1fr;

  padding: 2px;
  cursor: pointer;
  border-radius: var(--switch-border-radius);
  background-color: var(--switch-color-bg);

  // the thumb
  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    grid-area: off;
    border-radius: var(--ads-border-radius-circle);
    background-color: var(--thumb-color-bg);
  }

  &:hover {
    // TODO: needs a theme variable
    --switch-color-bg: var(--ads-v2-color-black-250);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--ads-v2-opacity-disabled);

    &:hover {
      --switch-color-bg: var(--ads-v2-color-bg-emphasis);
    }
  }

  &:checked {
    justify-content: flex-end;
    --switch-color-bg: var(--ads-v2-color-bg-brand-secondary);

    // set position of thumb when checked
    &::before {
      grid-area: on;
    }
  }
`;
