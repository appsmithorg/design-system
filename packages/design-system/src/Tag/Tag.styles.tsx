import styled, { css } from "styled-components";
import { Size } from "./Tag.types";
import { Icon } from "../Icon";

const Variables = css``;

const TagSize = {
  sm: css`
    padding: 0 var(--ads-v2-spaces-2);
  `,
  md: css`
    padding: var(--ads-v2-spaces-1) var(--ads-v2-spaces-2);
  `,
};

export const StyledTag = styled.span<{
  isClosed: boolean;
  size?: Size;
}>`
  ${Variables}

  ${({ size }) => size && TagSize[size]}

  background-color: var(--ads-v2-color-bg-muted);
  color: var(--ads-v2-color-fg);
  border-radius: var(--ads-v2-border-radius);

  display: flex;
  align-items: center;

  ${({ isClosed }) => isClosed && `display: none;`}
`;

export const StyledIcon = styled(Icon)`
  margin-left: var(--ads-v2-spaces-1);
  margin-top: var(--ads-v2-spaces-1);
  margin-bottom: var(--ads-v2-spaces-1);
  &:hover {
    cursor: pointer;
  }
`;
