import styled, { css } from "styled-components";
import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { MenuSizes } from "./Menu.types";
import {
  MenuItemChildrenClassName,
  MenuItemEndIconClassName,
} from "./Menu.constants";

const Variables = css`
  --menu-item-padding: var(--ads-v2-spaces-3);
  --menu-item-gap: var(--ads-v2-spaces-3);
  --menu-item-color-bg: var(--ads-v2-color-bg);
  --menu-item-font-size: var(--ads-v2-font-size-4);
`;

const MenuItemSizeStyles = {
  sm: css`
    --menu-item-padding: var(--ads-v2-spaces-2);
    --menu-item-gap: var(--ads-v2-spaces-2);
    --menu-item-font-size: var(--ads-v2-font-size-2);
  `,
  md: css`
    --menu-item-padding: var(--ads-v2-spaces-3);
    --menu-item-gap: var(--ads-v2-spaces-3);
    --menu-item-font-size: var(--ads-v2-font-size-4);
  `,
};

const MenuStyle = css`
  ${Variables}

  display: flex;
  flex-direction: column;
  gap: var(--ads-v2-spaces-1);
  width: fit-content;
  height: fit-content;
  max-width: 280px;
  background-color: var(--ads-v2-color-bg);
  border-radius: var(--ads-v2-border-radius);
  border: 1px solid var(--ads-v2-color-border-muted);
  box-shadow: 0px 15px 56px rgba(42, 42, 42, 0.07),
    0px 1.87823px 7.01207px rgba(42, 42, 42, 0.0109741);
  padding: var(--ads-v2-spaces-2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

export const StyledMenuContent = styled(RadixMenu.Content)<{
  height?: string;
  width?: string;
}>`
  ${MenuStyle}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;

export const StyledMenuSubContent = styled(RadixMenu.SubContent)<{
  height?: string;
  width?: string;
}>`
  ${MenuStyle}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;

const MenuItemStyle = css`
  display: flex;
  align-items: center;
  padding: var(--menu-item-padding);
  gap: var(--menu-item-gap);
  border-radius: var(--ads-v2-border-radius);
  cursor: pointer;
  background-color: var(--menu-item-color-bg);
  position: relative;
  color: var(--ads-v2-color-fg);

  & > .${MenuItemEndIconClassName} {
    position: relative;
    right: 0;
  }

  & > .${MenuItemChildrenClassName} {
    flex: 1;
    width: 100%;
    font-size: var(--menu-item-font-size);
    overflow-wrap: break-word;
  }

  &:hover:not([data-disabled]),
  &:focus-visible {
    --menu-item-color-bg: var(--ads-v2-color-bg-subtle);
    outline: none;
  }

  &:focus-visible:not(:hover) {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }

  &:active:not([data-disabled]) {
    --menu-item-color-bg: var(--ads-v2-color-bg-emphasis);
  }

  &[data-disabled] {
    cursor: not-allowed;
    opacity: var(--ads-v2-opacity-disabled);
  }
`;

export const StyledMenuItem = styled(RadixMenu.Item)<{
  size?: MenuSizes;
}>`
  ${MenuItemStyle}

  ${({ size }) => size && MenuItemSizeStyles[size]}
`;

export const StyledMenuSubTrigger = styled(RadixMenu.SubTrigger)<{
  size?: MenuSizes;
}>`
  ${MenuItemStyle}

  ${({ size }) => size && MenuItemSizeStyles[size]}

  &[data-state="open"] {
    --menu-item-color-bg: var(--ads-v2-color-bg-emphasis);
  }
`;

export const StyledMenuSeparator = styled(RadixMenu.Separator)`
  height: 1px;
  background-color: var(--ads-v2-color-border-muted);
  width: 100%;
`;