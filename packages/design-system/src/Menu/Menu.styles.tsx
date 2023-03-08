import styled, { css } from "styled-components";
import * as RadixMenu from "@radix-ui/react-dropdown-menu";

const Variables = css`
  --item-color-bg: var(--ads-v2-color-bg);
`;

const MenuStyle = css`
  ${Variables}

  min-width: 200px;
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

export const StyledMenuContent = styled(RadixMenu.Content)`
  ${MenuStyle}
`;

export const StyledMenuSubContent = styled(RadixMenu.SubContent)`
  ${MenuStyle}
`;

const MenuItemStyle = css`
  display: flex;
  align-items: center;
  gap: var(--ads-v2-spaces-3);
  padding: var(--ads-v2-spaces-3);
  border-radius: var(--ads-v2-border-radius);
  cursor: pointer;
  background-color: var(--item-color-bg);

  &:hover,
  &:focus-visible {
    --item-color-bg: var(--ads-v2-color-bg-subtle);
    outline: none;
  }

  &:focus-visible:not(:hover) {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }

  &:active {
    --item-color-bg: var(--ads-v2-color-bg-emphasis);
  }
`;

export const StyledMenuItem = styled(RadixMenu.Item)`
  ${MenuItemStyle}
`;

export const StyledMenuSubTrigger = styled(RadixMenu.SubTrigger)`
  ${MenuItemStyle}

  &[data-state="open"] {
    --item-color-bg: var(--ads-v2-color-bg-emphasis);
  }
`;
