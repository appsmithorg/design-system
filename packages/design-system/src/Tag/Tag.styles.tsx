import styled, { css } from "styled-components";
import { TagKind, TagSize } from "./Tag.types";
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

const KindMap = {
  success: css`
    --tag-color-background: var(--ads-v2-color-bg-success);
  `,
  warning: css`
    --tag-color-background: var(--ads-v2-color-bg-warning);
  `,
  info: css`
    --tag-color-background: var(--ads-v2-color-bg-information);
  `,
  error: css`
    --tag-color-background: var(--ads-v2-color-bg-error);
  `,
};

export const StyledTag = styled.span<{
  isClosed: boolean;
  kind?: TagKind;
  size?: TagSize;
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
