import styled, { css } from "styled-components";
import { TagKind, TagSizes } from "./Tag.types";
import { Button } from "../Button";

const Variables = css`
    --tag-color-background: var(--ads-v2-color-bg-subtle);
    --tag-color-border: transparent;
    --tag-color-fg: var(--ads-v2-color-fg);
  `;

const TagSizeMap = {
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
  neutral: css`
    --tag-color-background: var(--ads-v2-color-bg-subtle);
    --tag-color-border: transparent;
    --tag-color-fg: var(--ads-v2-color-fg);
  `,
  special: css`
    --tag-color-background: var(--ads-v2-color-bg-special);
    --tag-color-border: var(--ads-v2-color-border-special);
    --tag-color-fg: var(--ads-v2-color-fg-special);
  `,
  premium: css`
    --tag-color-background: var(--ads-v2-color-bg-premium);
    --tag-color-border: var(--ads-v2-color-border-premium);
    --tag-color-fg: var(--ads-v2-color-fg-premium);
  `,
};

export const StyledTag = styled.span<{
  isClosed: boolean;
  kind?: TagKind;
  size?: TagSizes;
}>`
  ${Variables}

  ${({ size }) => size && TagSizeMap[size]}
  ${({ kind }) => kind && KindMap[kind]}
  min-width: fit-content;

  background-color: var(--tag-color-background);
  border: 1px solid var(--tag-color-border);
  color: var(--tag-color-fg);

  border-radius: var(--ads-v2-border-radius);
  box-sizing: border-box;

  display: flex;
  align-items: center;

  ${({ isClosed }) => isClosed && `display: none;`}
`;

export const StyledButton = styled(Button)`
  --button-color-fg: var(--tag-color-fg);
  --button-color-bg: inherit;

  margin-left: var(--ads-v2-spaces-1);
  position: relative;
  top: 1px; // align with text
  cursor: pointer;

  &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
    --button-color-fg: var(--tag-color-fg);
    --button-color-bg: inherit;
  }
  &:active:not([data-disabled="true"]):not([data-loading="true"]) {
    --button-color-fg: var(--tag-color-fg);
    --button-color-bg: inherit;

`;
