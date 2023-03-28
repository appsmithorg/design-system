import styled, { css } from "styled-components";
import {
  AvatarClassName,
  AvatarGroupShowMoreClassName,
} from "./Avatar.constants";
import { AvatarSize } from "./Avatar.types";

const Variables = css`
  --avatar-width: 24px;
  --avatar-height: 24px;
  --avatar-font-size: var(--ads-v2-font-size-2);
`;

const Sizes = {
  sm: css`
    --avatar-width: 24px;
    --avatar-height: 24px;
    --avatar-font-size: var(--ads-v2-font-size-2);
  `,
  md: css`
    --avatar-width: 32px;
    --avatar-height: 32px;
    --avatar-font-size: var(--ads-v2-font-size-4);
  `,
};

export const StyledAvatar = styled.span<{
  size: AvatarSize;
}>`
  ${Variables}

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  user-select: none;

  ${({ size }) => Sizes[size]}

  border-radius: 50%;
  background-color: var(--ads-v2-color-bg-subtle);
  color: var(--ads-v2-color-fg);
  font-family: var(--ads-v2-font-family);

  width: var(--avatar-width);
  height: var(--avatar-height);
  font-size: var(--avatar-font-size);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }

  &.${AvatarGroupShowMoreClassName} {
    cursor: pointer;
  }

  &.${AvatarGroupShowMoreClassName}:hover {
    background-color: var(--ads-v2-color-bg-muted);

    img:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledAvatarGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .${AvatarClassName}:not(:first-child) {
    margin-left: -8px;
  }

  ${StyledAvatar} {
    border: 1px solid var(--ads-v2-color-white);
  }
`;

export const AvatarMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--ads-v2-spaces-3);
  min-width: 160px;

  ${StyledAvatar} {
    border: none;
  }
`;
