import styled, { css } from "styled-components";
import {
  ButtonContentChildrenClassName,
  ButtonContentIconEndClassName,
  ButtonContentIconStartClassName,
  ButtonLoadingClassName,
} from "./Button.constants";
import { ButtonSizes, Kind } from "./Button.types";

const Variables = css`
  --button-color-bg: var(--ads-v2-color-bg);
  --button-color-fg: var(--ads-v2-color-text);
  --button-color-border: var(--ads-v2-color-border);
  --button-font-weight: 600;
  --button-font-size: 14px;
  --button-padding: var(--ads-v2-spaces-3) var(--ads-v2-spaces-4);
  --button-height: 24px;
  --button-gap: var(--ads-v2-spaces-2);
`;

const getSizes = (size: ButtonSizes, isIconButton?: boolean) => {
  const Sizes = {
    sm: css`
      --button-font-weight: 500;
      --button-font-size: 12px;
      --button-padding: ${isIconButton
        ? "var(--ads-v2-spaces-2)"
        : "var(--ads-v2-spaces-2) var(--ads-v2-spaces-3)"};
      --button-gap: var(--ads-v2-spaces-2);
    `,
    md: css`
      --button-font-weight: 600;
      --button-font-size: 14px;
      --button-padding: ${isIconButton
        ? "var(--ads-v2-spaces-3)"
        : "var(--ads-v2-spaces-3) var(--ads-v2-spaces-4)"};
      --button-gap: var(--ads-v2-spaces-3);
    `,
  };
  return Sizes[size];
};

const getHeights = (size: ButtonSizes, isIconButton?: boolean) => {
  const Heights = {
    sm: css`
      --button-height: 24px;
      ${isIconButton && `width: 24px;`}
    `,
    md: css`
      --button-height: 36px;
      ${isIconButton && `width: 36px;`}
    `,
    // lg: css`
    //   --button-height: 40px;
    // `,
  };
  return Heights[size];
};

const Kinds = {
  primary: css`
    --button-color-bg: var(--ads-v2-color-bg-brand);
    --button-color-fg: var(--ads-v2-color-fg-on-brand);
    --button-color-border: var(--ads-v2-color-border-brand);

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-color-bg-brand-emphasis);
      --button-color-fg: var(--ads-v2-color-fg-on-brand);
      --button-color-border: var(--ads-v2-color-border-brand-emphasis);
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-color-bg-brand-emphasis-plus);
      --button-color-fg: var(--ads-v2-color-fg-on-brand);
      --button-color-border: var(--ads-v2-color-border-brand-emphasis);
    }
  `,
  secondary: css`
    --button-color-bg: var(--ads-v2-color-bg);
    --button-color-fg: var(--ads-v2-color-fg);
    --button-color-border: var(--ads-v2-color-border);

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-color-bg-subtle);
      --button-color-fg: var(--ads-v2-color-fg);
      --button-color-border: var(--ads-v2-color-border);
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-color-bg-muted);
      --button-color-fg: var(--ads-v2-color-fg);
      --button-color-border: var(--ads-v2-color-border-emphasis);
    }
  `,
  tertiary: css`
    --button-color-bg: transparent;
    --button-color-fg: var(--ads-v2-color-fg);
    --button-color-border: transparent;

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      mix-blend-mode: multiply;
      --button-color-bg: var(--ads-v2-color-bg-subtle);
      --button-color-fg: var(--ads-v2-color-fg);
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-color-bg-muted);
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

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-color-bg-error-emphasis);
      --button-color-fg: var(--ads-v2-color-fg-on-error);
      --button-color-border: transparent;
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-color-bg-error-emphasis-plus);
      --button-color-fg: var(--ads-v2-color-fg-on-error);
      --button-color-border: transparent;
    }
  `,
};

export const ButtonContent = styled.div<{
  isIconButton?: boolean;
  size?: ButtonSizes;
}>`
  /* Content is separated out to make opacity driven loader functionality. */
  /* Size style */
  ${({ isIconButton, size }) => size && getSizes(size, isIconButton)}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--button-gap);
  background-color: var(--button-color-bg);
  border: 1px solid var(--button-color-border);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: var(--button-padding);
  border-radius: inherit;
  text-transform: capitalize;

  & > .${ButtonContentChildrenClassName} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
    color: var(--button-color-fg);
  }
`;

export const StyledButton = styled.button<{
  kind?: Kind;
  UNSAFE_height?: string;
  size?: ButtonSizes;
  UNSAFE_width?: string;
  disabled?: boolean;
  isIconButton?: boolean;
}>`
  ${Variables}
  /* Variant style */
  ${({ kind }) => kind && Kinds[kind]}
  /* Button heights */
  ${({ isIconButton, size }) => size && getHeights(size, isIconButton)}

  && {
    position: relative;
    cursor: pointer;
    border-radius: var(--ads-v2-border-radius) !important;
    border: none;
    background-color: transparent;
    color: var(--button-color-fg);
    text-decoration: none;
    ${({ UNSAFE_height }) =>
      UNSAFE_height
        ? `height: ${UNSAFE_height};`
        : `height: var(--button-height);`}
    ${({ UNSAFE_width }) => UNSAFE_width && `width: ${UNSAFE_width};`}
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    min-width: ${({ isIconButton }) =>
      isIconButton ? "unset" : "min-content"};

    /* button disabled style */
    &[data-disabled="true"] {
      cursor: not-allowed;
      opacity: var(--ads-v2-opacity-disabled);
    }

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
      color: var(--button-color-fg);
    }

    /* Loading styles */
    &[data-loading="true"] {
      cursor: not-allowed;

      & > ${ButtonContent} {
        opacity: var(--ads-v2-opacity-disabled);
      }

      & > ${ButtonContent} > * {
        visibility: hidden;
      }
    }

    /* Focus styles */
    &:focus-visible {
      outline: var(--ads-v2-border-width-outline) solid
        var(--ads-v2-color-outline);
      outline-offset: var(--ads-v2-offset-outline);
    }
  }
`;
