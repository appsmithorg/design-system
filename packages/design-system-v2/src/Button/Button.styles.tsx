import styled, { css } from "styled-components";
import { Size, Kind } from "./Button.types";

const Variables = css`
  --btn-border-radius: var(--ads-v2-border-radius);
  --btn-color-bg: var(--ads-v2-color-bg);
  --btn-color-fg: var(--ads-v2-color-text);
  --btn-color-border: var(--ads-v2-color-border);
  --btn-font-weight: 600;
`;

const Sizes = {
  sm: css`
    padding: 2px 8px;
    font-size: 11px;
    font-weight: 500;
  `,
  md: css`
    padding: 6px 16px;
    font-size: 12px;
  `,
  lg: css`
    padding: 10px 26px;
    font-size: 13px;
  `,
};

const Kinds = {
  primary: css`
    --btn-color-bg: var(--ads-v2-color-bg-brand);
    --btn-color-fg: var(--ads-v2-color-fg-on-brand);
    --btn-color-border: var(--ads-v2-color-border-brand);

    &:hover {
      --btn-color-bg: var(--ads-v2-color-bg-brand-emphasis);
      --btn-color-fg: var(--ads-v2-color-fg-on-brand);
      --btn-color-border: var(--ads-v2-color-border-brand-emphasis);
    }

    &:active {
      --btn-color-bg: var(--ads-v2-color-bg-brand-emphasis);
      --btn-color-fg: var(--ads-v2-color-fg-on-brand);
      --btn-color-border: var(--ads-v2-color-border-brand-emphasis);
    }
  `,
  secondary: css`
    --btn-color-bg: var(--ads-v2-color-bg);
    --btn-color-fg: var(--ads-v2-color-fg-muted);
    --btn-color-border: var(--ads-v2-color-border);

    &:hover {
      --btn-color-bg: var(--ads-v2-color-bg-subtle);
      --btn-color-fg: var(--ads-v2-color-fg-muted);
      --btn-color-border: var(--ads-v2-color-border);
    }

    &:active {
      --btn-color-bg: var(--ads-v2-color-bg-muted);
      --btn-color-fg: var(--ads-v2-color-fg-muted);
      --btn-color-border: var(--ads-v2-color-border-emphasis);
    }
  `,
  tertiary: css`
    --btn-color-bg: transparent;
    --btn-color-fg: var(--ads-v2-color-fg);
    --btn-color-border: transparent;
  `,
  error: css`
    --btn-color-bg: var(--ads-v2-color-bg-error);
    --btn-color-fg: var(--ads-v2-color-fg-error);
    --btn-color-border: var(--ads-v2-color-border-error);
  `,
};

export const StyledButton = styled.button<{
  size?: Size;
  kind?: Kind;
}>`
  ${Variables}

  /* Size style */
  ${({ size }) => size && Sizes[size]}

  /* Variant style */
  ${({ kind }) => kind && Kinds[kind]}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--ads-spaces-2);
  cursor: pointer;
  border-radius: var(--btn-border-radius);
  border: 1px solid var(--btn-color-border);
  background-color: var(--btn-color-bg);
  color: var(--btn-color-fg);
  font-family: var(--ads-v2-font-family);
  font-weight: var(--btn-font-weight);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

