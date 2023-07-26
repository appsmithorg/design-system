import styled, { css } from "styled-components";
import { TagKind, TagSize } from "./Tag.types";
import { Button } from "../Button";

const Variables = css`
  --tag-color-background: var(--ads-v2-color-bg);
  --tag-color-border: var(--ads-v2-color-border);
  --tag-color-fg: var(--ads-v2-color-fg);
  --tag-close-icon-color-background: inherit;
`;

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
    --tag-color-border: var(--ads-v2-color-border-success);
    --tag-color-fg: var(--ads-v2-color-fg-success);
    --tag-close-icon-color-background: inherit;
  `,
  warning: css`
    --tag-color-background: var(--ads-v2-color-bg-warning);
    --tag-color-border: var(--ads-v2-color-border-warning);
    --tag-color-fg: var(--ads-v2-color-fg-warning);
    --tag-close-icon-color-background: inherit;
  `,
  info: css`
    --tag-color-background: var(--ads-v2-color-bg-information);
    --tag-color-border: var(--ads-v2-color-border-info);
    --tag-color-fg: var(--ads-v2-color-fg-information);
    --tag-close-icon-color-background: inherit;
  `,
  error: css`
    --tag-color-background: var(--ads-v2-color-bg-error);
    --tag-color-border: var(--ads-v2-color-border-error);
    --tag-color-fg: var(--ads-v2-color-fg-error);
    --tag-close-icon-color-background: inherit;
  `,
  special: css`
    --tag-color-background: var(--ads-v2-color-bg-special);
    --tag-color-border: var(--ads-v2-color-border-special);
    --tag-color-fg: var(--ads-v2-color-fg-special);
    --tag-close-icon-color-background: inherit;
  `,
  premium: css`
    --tag-color-background: var(--ads-v2-color-bg-premium);
    --tag-color-border: var(--ads-v2-color-border-premium);
    --tag-color-fg: var(--ads-v2-color-fg-premium);
    --tag-close-icon-color-background: inherit;
  `,
};

export const StyledTag = styled.span<{
  isClosed: boolean;
  kind?: TagKind;
  size?: TagSize;
}>`
  ${Variables}

  ${({ size }) => size && SizeMap[size]}
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
  --button-color-bg: var(--tag-close-icon-color-backgrond);

  margin-left: var(--ads-v2-spaces-1);
  position: relative;
  top: 1px; // align with text
  &:hover {
    cursor: pointer;
  }
`;
