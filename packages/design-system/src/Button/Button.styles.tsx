import styled, { css } from "styled-components";
import {
  ButtonContentIconEndClassName,
  ButtonContentIconStartClassName,
  ButtonLoadingClassName,
  ButtonLoadingIconClassName,
} from "./Button.constants";
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
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 500;

    /* Button icon sizes */
    & > .${ButtonContentIconStartClassName} > svg,
    & > .${ButtonContentIconEndClassName} > svg {
      width: 12px;
      height: 12px;
    }
  `,
  md: css`
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 600;

    /* Button icon sizes */
    & > .${ButtonContentIconStartClassName} > svg,
    & > .${ButtonContentIconEndClassName} > svg {
      width: 16px;
      height: 16px;
    }
  `,
  lg: css`
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 600;

    /* Button icon sizes */
    & > .${ButtonContentIconStartClassName} > svg,
    & > .${ButtonContentIconEndClassName} > svg {
      width: 18px;
      height: 18px;
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

    &:disabled {
      --button-color-bg: transparent;
    }
  `,
  error: css`
    --button-color-bg: var(--ads-v2-color-bg-error);
    --button-color-fg: var(--ads-v2-color-fg-on-error);
    --button-color-border: transparent;

    &:hover {
      --button-color-bg: var(--ads-v2-color-bg-error-emphasis);
      --button-color-fg: var(--ads-v2-color-fg-on-error-emphasis);
      --button-color-border: transparent;
    }

    &:active {
      --button-color-bg: var(--ads-v2-color-bg-error-emphasis-plus);
      --button-color-fg: var(--ads-v2-color-fg-on-error-emphasis);
      --button-color-border: transparent;
    }
  `,
};

const LoaderSizes = {
  sm: css`
    /* Loading icon size */
    & > .${ButtonLoadingClassName} > .${ButtonLoadingIconClassName} > svg {
      width: 12px;
      height: 12px;
    }
  `,
  md: css`
    /* Loading icon size */
    & > .${ButtonLoadingClassName} > .${ButtonLoadingIconClassName} > svg {
      width: 16px;
      height: 16px;
    }
  `,
  lg: css`
    /* Loading icon size */
    & > .${ButtonLoadingClassName} > .${ButtonLoadingIconClassName} > svg {
      width: 20px;
      height: 20px;
    }
  `,
};

export const ButtonContent = styled.div<{
  size?: Size;
}>`
  /* Content is separated out to make opacity driven loader functionality. */
  /* Size style */
  ${({ size }) => size && Sizes[size]}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--ads-v2-spaces-2);
  background-color: var(--button-color-bg);
  border: 1px solid var(--button-color-border);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const StyledButton = styled.button<{
  kind?: Kind;
  height?: string;
  size?: Size;
  width?: string;
  isLoading?: boolean;
  disabled?: boolean;
}>`
  ${Variables}

  /* Variant style */
  ${({ kind }) => kind && Kinds[kind]}

  /* Loader size style */
  ${({ size }) => size && LoaderSizes[size]}

  position: relative;
  cursor: pointer;
  border-radius: var(--button-border-radius);
  border: none;
  background-color: transparent;
  color: var(--button-color-fg);
  font-family: var(--ads-v2-font-family);
  font-weight: var(--button-font-weight);
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;

  /* button disabled style */
  ${({ disabled }) =>
    disabled === true &&
    css`
      cursor: not-allowed;
      opacity: var(--ads-v2-opacity-disabled);
    `}

  /* Loader styles */
  & > .${ButtonLoadingClassName} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  /* Loading styles */
  ${({ isLoading }) =>
    isLoading === true &&
    css`
      pointer-events: none;

      & > ${ButtonContent} {
        opacity: var(--ads-v2-opacity-disabled);
      }

      & > ${ButtonContent} > * {
        visibility: hidden;
      }
    `}

  /* Focus styles */
  &:focus, &:focus-visible {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }
`;
