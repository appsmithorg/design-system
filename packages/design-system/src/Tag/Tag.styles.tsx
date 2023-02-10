import styled, { css } from "styled-components";
import { Size } from "./Tag.types";

const Variables = css``;

const TagSize = {
  small: css`
    padding: 0 var(--ads-v2-spaces-2);
  `,
  medium: css`
    padding: var(--ads-v2-spaces-1) var(--ads-v2-spaces-2);
  `,
};

export const StyledTag = styled.span<{
  size?: Size;
}>`
  ${Variables}

  ${({ size }) => size && TagSize[size]}

  background-color: var(--ads-v2-color-bg-muted);
  color: var(--ads-v2-color-fg);
  border-radius: var(--ads-v2-border-radius);
`;
