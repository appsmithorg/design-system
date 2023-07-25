import styled, { css } from "styled-components";
import { TagSize } from "./Tag.types";
import { Button } from "../Button";

const Variables = css``;

const SizeMap = {
  sm: css`
    padding: var(--ads-v2-spaces-1) var(--ads-v2-spaces-2);
    height: 18px;
  `,
  md: css`
    padding: var(--ads-v2-spaces-2);
    height: 22px;
  `,
};

export const StyledTag = styled.span<{
  isClosed: boolean;
  size?: TagSizes;
}>`
  ${Variables}

  ${({ size }) => size && SizeMap[size]}
  min-width: fit-content;

  background-color: var(--ads-v2-color-bg-subtle);
  color: var(--ads-v2-color-fg);
  border-radius: var(--ads-v2-border-radius);
  box-sizing: border-box;

  display: flex;
  align-items: center;

  ${({ isClosed }) => isClosed && `display: none;`}
`;

export const StyledButton = styled(Button)`
  margin-left: var(--ads-v2-spaces-1);
  position: relative;
  top: 1px; // align with text
  &:hover {
    cursor: pointer;
  }
`;
