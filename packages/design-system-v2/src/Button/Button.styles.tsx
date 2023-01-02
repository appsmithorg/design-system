import styled, { css } from "styled-components";
import { Size, Variant, Category } from "./Button.types";

const Variables = css`
  --btn-border-radius: var(--ads-v2-border-radius);
  --btn-color-bg: var(--ads-v2-color-bg);
  --btn-color-fg: var(--ads-v2-color-text);
  --btn-color-border: var(--ads-v2-color-border);
`;

const Sizes = {
  sm: css`
    padding: 4px 8px;
    font-size: 12px;
  `,
  md: css`
    padding: 8px 12px;
    font-size: 14px;
  `,
  lg: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
};

const Variants = {
  default: css``,
  success: css`
    --btn-color-bg: var(--ads-v2-color-bg-success);
    --btn-color-fg: var(--ads-v2-color-fg-on-success);
    --btn-color-border: var(--ads-v2-color-border-success);
  `,
  danger: css`
    --btn-color-bg: var(--ads-v2-color-bg-danger);
    --btn-color-fg: var(--ads-v2-color-fg-on-danger);
    --btn-color-border: var(--ads-v2-color-border-danger);
  `,
  warning: css`
    --btn-color-bg: var(--ads-v2-color-bg-warning);
    --btn-color-fg: var(--ads-v2-color-fg-on-warning);
    --btn-color-border: var(--ads-v2-color-border-warning);
  `,
};

const Categories = {
  primary: css`
    --btn-color-bg: var(--ads-v2-color-bg-primary);
    --btn-color-fg: var(--ads-v2-color-fg-on-primary);
    --btn-color-border: var(--ads-v2-color-border-primary);
  `,
  secondary: css`
    --btn-color-bg: var(--ads-v2-color-bg-secondary);
    --btn-color-fg: var(--ads-v2-color-fg-on-secondary);
    --btn-color-border: var(--ads-v2-color-border-secondary);
  `,
  tertiary: css`
    --btn-color-bg: var(--ads-v2-color-bg-tertiary);
    --btn-color-fg: var(--ads-v2-color-fg-on-tertiary);
    --btn-color-border: var(--ads-v2-color-border-tertiary);
  `,
};

export const StyledButton = styled.button<{
  size?: Size;
  variant?: Variant;
}>`
  ${Variables}

  /* Size style */
  ${({ size }) => size && Sizes[size]}

  /* Variant style */
  ${({ variant }) => variant && Variants[variant]}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-radius: var(--btn-border-radius);
  border: 1px solid var(--btn-color-border);
  background-color: var(--btn-color-bg);
  color: var(--btn-color-fg);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

