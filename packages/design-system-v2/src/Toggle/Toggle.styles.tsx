import styled, { css } from "styled-components";

const Variables = css`
  --toggle-border-radius: var(--ads-v2-pill-border-radius);
  --toggle-color-bg: var(--ads-v2-color-bg-emphasis);
  --thumb-color-bg: var(--ads-v2-color-bg);
`;

export const StyledToggle = styled.input`
  ${Variables}

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
    --toggle-color-bg: var(--ads-v2-color-black-250)
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
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
