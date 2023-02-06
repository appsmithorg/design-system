import styled, { css } from "styled-components";
import { Text } from "../Text";

const Variables = css`
  --toggle-border-radius: var(--ads-v2-pill-border-radius);
  --toggle-color-bg: var(--ads-v2-color-bg-emphasis);
  --thumb-color-bg: var(--ads-v2-color-bg);
`;

export const StyledToggleInput = styled.input`
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
  border-radius: var(--toggle-border-radius);
  background-color: var(--toggle-color-bg);

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
    --toggle-color-bg: var(--ads-v2-color-black-250);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--ads-v2-opacity-disabled);
  }

  &:focus-visible {
    outline-color: var(--ads-v2-color-focus);
  }

  &:checked {
    justify-content: flex-end;
    --toggle-color-bg: var(--ads-v2-color-bg-brand-secondary);

    // set position of thumb when checked
    &::before {
      grid-area: on;
    }
  }
`;

export const StyledToggleLabel = styled(Text)`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;

  min-width: 9rem;
`;

export const StyledToggle = styled.span<{
  isDisabled?: boolean;
}>`
  ${({ isDisabled }) => {
    if (isDisabled) {
      return css`
        opacity: var(--ads-v2-opacity-disabled);
        &,
        & * {
          cursor: not-allowed !important;
        }
      `;
    }
  }}

`;
