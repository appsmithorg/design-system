import styled, { css } from "styled-components";
import { ListSizes } from "./List.types";
import {
  ListItemBDescClassName,
  ListItemIDescClassName,
  ListItemTitleClassName,
} from "./List.constants";

const Variables = css`
  --list-item-font-size: var(--ads-v2-font-size-4);
`;

const Sizes = {
  md: css`
    --listitem-title-font-size: var(--ads-v2-font-size-4);
    --listitem-bdescription-font-size: var(--ads-v2-font-size-2);
    --listitem-idescription-font-size: var(--ads-v2-font-size-2);
  `,
  lg: css`
    --listitem-title-font-size: var(--ads-v2-font-size-6);
    --listitem-bdescription-font-size: var(--ads-v2-font-size-4);
    --listitem-idescription-font-size: var(--ads-v2-font-size-4);
  `,
};

export const StyledList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2px;
`;

export const StyledListItem = styled.div<{ size: ListSizes }>`
  ${Variables};

  display: flex;
  padding: 8px;
  width: 100%;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: var(--ads-v2-border-radius);
  box-sizing: border-box;

  ${({ size }) => Sizes[size]}

  .text-overflow {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & .${ListItemTitleClassName} {
    font-size: var(--listitem-title-font-size);
  }

  & .${ListItemBDescClassName} {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: initial;
    white-space: initial;
    font-size: var(--listitem-bdescription-font-size);
  }

  & .${ListItemIDescClassName} {
    font-size: var(--listitem-idescription-font-size);
  }

  &:hover {
    background-color: var(--ads-v2-color-bg-subtle);
  }

  &:active {
    background-color: var(--ads-v2-color-bg-muted);
  }

  &[data-selected="true"] {
    background-color: var(--ads-v2-color-bg-muted);
  }

  /* disabled style */
  &[data-disabled="true"] {
    cursor: not-allowed;
    opacity: var(--ads-v2-opacity-disabled);
  }

  /* Focus styles */
  &:focus-visible {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }
`;

export const StartIconWrapper = styled.div`
  align-self: flex-start;
`;

export const TooltipTextWrapper = styled.div`
  display: flex;
  min-width: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContentTextWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const DescriptionWrapper = styled.div`
  flex-direction: column;
  min-width: 0;
  gap: 8px;
  display: flex;
`;

export const InlineDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 0;
  gap: 8px;
  flex: 1;
`;
