import styled, { css } from "styled-components";
import { Size, Kind } from "./Button.types";

const Variables = css`
  --button-border-radius: var(--ads-v2-border-radius);
  --button-color-bg: var(--ads-v2-color-bg);
  --button-color-fg: var(--ads-v2-color-text);
  --button-color-border: var(--ads-v2-color-border);
  --button-font-weight: 600;
`;

const Sizes = {
  sm: css`
    padding: 2px 8px;
    font-size: 11px;
    font-weight: 500;

    & svg {
      width: 11px;
      height: 11px;
    }
  `,
  md: css`
    padding: 6px 16px;
    font-size: 12px;

    & svg {
      width: 12px;
      height: 12px;
    }
  `,
  lg: css`
    padding: 10px 26px;
    font-size: 13px;

    & svg {
      width: 13px;
      height: 13px;
    }
  `,
};

const Kinds = {
  primary: css`
    --button-color-bg: var(--ads-v2-color-bg-brand);
    --button-color-fg: var(--ads-v2-color-fg-on-brand);
    --button-color-border: var(--ads-v2-color-border-brand);

    &:hover {
      --button-color-bg: var(--ads-v2-color-bg-brand-emphasis);
      --button-color-fg: var(--ads-v2-color-fg-on-brand);
      --button-color-border: var(--ads-v2-color-border-brand-emphasis);
    }

    &:active {
      --button-color-bg: var(--ads-v2-color-bg-brand-emphasis);
      --button-color-fg: var(--ads-v2-color-fg-on-brand);
      --button-color-border: var(--ads-v2-color-border-brand-emphasis);
    }
  `,
  secondary: css`
    --button-color-bg: var(--ads-v2-color-bg);
    --button-color-fg: var(--ads-v2-color-fg-muted);
    --button-color-border: var(--ads-v2-color-border);

    &:hover {
      --button-color-bg: var(--ads-v2-color-bg-subtle);
      --button-color-fg: var(--ads-v2-color-fg-muted);
      --button-color-border: var(--ads-v2-color-border);
    }

    &:active {
      --button-color-bg: var(--ads-v2-color-bg-muted);
      --button-color-fg: var(--ads-v2-color-fg-muted);
      --button-color-border: var(--ads-v2-color-border-emphasis);
    }
  `,
  tertiary: css`
    --button-color-bg: transparent;
    --button-color-fg: var(--ads-v2-color-fg);
    --button-color-border: transparent;

    &:hover {
      --button-color-bg: var(--ads-v2-color-bg-subtle);
      --button-color-fg: var(--ads-v2-color-fg-muted);
    }

    &:active {
      --button-color-bg: var(--ads-v2-color-bg-muted);
      --button-color-fg: var(--ads-v2-color-fg-muted);
    }
  `,
  error: css`
    --button-color-bg: var(--ads-v2-color-bg-error);
    --button-color-fg: var(--ads-v2-color-fg-error);
    --button-color-border: var(--ads-v2-color-border-error);
  `,
};

export const StyledButton = styled.button<{
  size?: Size;
  kind?: Kind;
  height?: string;
  width?: string;
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
  gap: var(--ads-v2-spaces-2);
  cursor: pointer;
  border-radius: var(--button-border-radius);
  border: 1px solid var(--button-color-border);
  background-color: var(--button-color-bg);
  color: var(--button-color-fg);
  font-family: var(--ads-v2-font-family);
  font-weight: var(--button-font-weight);
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
