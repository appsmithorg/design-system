import styled, { css } from "styled-components";
import {
  ButtonContentChildrenClassName,
  ButtonContentIconEndClassName,
  ButtonContentIconStartClassName,
  ButtonLoadingClassName,
  ButtonLoadingIconClassName,
} from "./Button.constants";
import { Size, Kind } from "./Button.types";

const Variables = css`
  --button-color-bg: var(--ads-v2-color-bg);
  --button-color-fg: var(--ads-v2-color-text);
  --button-color-border: var(--ads-v2-color-border);
  --button-font-weight: 600;
  --button-font-size: 14px;
  --button-icon-size: 16px;
  --button-padding: 8px 12px;
`;

const Sizes = {
  sm: css`
    --button-font-weight: 500;
    --button-font-size: 12px;
    --button-padding: 4px 8px;
    --button-icon-size: 12px;
  `,
  md: css`
    --button-font-weight: 600;
    --button-font-size: 14px;
    --button-padding: 8px 12px;
    --button-icon-size: 16px;
  `,
  lg: css`
    --button-font-weight: 600;
    --button-font-size: 16px;
    --button-padding: 8px 16px;
    --button-icon-size: 18px;
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
    --button-color-fg: var(--ads-v2-color-fg);
    --button-color-border: var(--ads-v2-color-border);

    &:hover {
      --button-color-bg: var(--ads-v2-color-bg-subtle);
      --button-color-fg: var(--ads-v2-color-fg);
      --button-color-border: var(--ads-v2-color-border);
    }

    &:active {
      --button-color-bg: var(--ads-v2-color-bg-muted);
      --button-color-fg: var(--ads-v2-color-fg);
      --button-color-border: var(--ads-v2-color-border-emphasis);
    }
  `,
  tertiary: css`
    --button-color-bg: transparent;
    --button-color-fg: var(--ads-v2-color-fg);
    --button-color-border: transparent;

    &:hover {
      --button-color-bg: var(--ads-v2-color-bg-muted);
      --button-color-fg: var(--ads-v2-color-fg);
    }

    &:active {
      --button-color-bg: var(--ads-v2-color-bg-emphasis);
      --button-color-fg: var(--ads-v2-color-fg);
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
  padding: var(--button-padding);
  border-radius: inherit;

  &
    > .${ButtonContentChildrenClassName},
    &
    > .${ButtonContentChildrenClassName}
    > * {
    color: var(--button-color-fg);
    font-family: var(--ads-v2-font-family);
    font-weight: var(--button-font-weight);
    font-size: var(--button-font-size);
  }

  & > .${ButtonContentIconStartClassName} > svg,
  & > .${ButtonContentIconEndClassName} > svg {
    width: var(--button-icon-size);
    height: var(--button-icon-size);
    color: var(--button-color-fg);
  }
`;

export const StyledButton = styled.button<{
  kind?: Kind;
  UNSAFE_height?: string;
  size?: Size;
  UNSAFE_width?: string;
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
  border-radius: var(--ads-v2-border-radius);
  border: none;
  background-color: transparent;
  ${({ UNSAFE_height }) => UNSAFE_height && `height: ${UNSAFE_height};`}
  ${({ UNSAFE_width }) => UNSAFE_width && `width: ${UNSAFE_width};`}
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
