import styled, { css } from "styled-components";
import { AvatarClassName } from "./Avatar.constants";
import { AvatarSize } from "./Avatar.types";

const Sizes = {
  sm: css`
    width: 24px;
    height: 24px;
    font-size: var(--ads-v2-font-size-2);
  `,
  md: css`
    width: 32px;
    height: 32px;
    font-size: var(--ads-v2-font-size-4);
  `,
};

export const StyledAvatar = styled.span<{
  size: AvatarSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;

  ${({ size }) => Sizes[size]}

  border-radius: 50%;
  background-color: var(--ads-v2-color-bg-subtle);
  color: var(--ads-v2-color-fg);
  font-family: var(--ads-v2-font-family);
  border: 1px solid var(--ads-v2-color-white);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }

  &:hover {
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
`;

export const AvatarMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--ads-v2-spaces-3);
  min-width: 160px;
`;
