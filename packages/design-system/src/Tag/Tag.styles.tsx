import styled, { css } from "styled-components";
import { Kind } from "./Tag.types";

const Variables = css`
  --tag-bg-color: var(--ads-v2-color-bg);
  --tag-fg-color: var(--ads-v2-color-fg);
`;

const Kinds = {
  success: css`
    --tag-bg-color: var(--ads-v2-color-bg-success);
    --tag-fg-color: var(--ads-v2-color-fg-success);
  `,
  error: css`
    --tag-bg-color: var(--ads-v2-color-bg-error);
    --tag-fg-color: var(--ads-v2-color-fg-error);
  `,
  warning: css`
    --tag-bg-color: var(--ads-v2-color-bg-warning);
    --tag-fg-color: var(--ads-v2-color-fg-warning);
  `,
  info: css`
    --tag-bg-color: var(--ads-v2-color-bg-info);
    --tag-fg-color: var(--ads-v2-color-fg-info);
  `,
};

export const StyledTag = styled.span<{
  kind?: Kind;
}>`
  ${Variables}

  ${({ kind }) => kind && Kinds[kind]}

  background-color: var(--tag-bg-color);
  color: var(--tag-fg-color);
  border-radius: var(--ads-v2-border-radius);

  padding: 0 var(--ads-v2-spaces-2);

`;
