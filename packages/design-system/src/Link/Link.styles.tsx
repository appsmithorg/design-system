import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "../Icon";
import { Kind } from "./Link.types";

const Variables = css`
  --color: var(--ads-v2-color-fg-brand);
`;

const Kinds = {
  primary: css`
    --color: var(--ads-v2-color-fg-brand);
    :hover {
      --color: var(--ads-v2-color-fg-brand-emphasis);
    }
  `,
  secondary: css`
    --color: var(--ads-v2-color-fg);
    :hover {
      --color: var(--ads-v2-color-fg-emphasis);
    }
  `,
};
export const StyledLink = styled(RouterLink)<{
  kind?: Kind;
}>`
  ${Variables}

  ${({ kind }) => kind && Kinds[kind]}

  font-family: var(--ads-v2-font-family);
  color: var(--color);

  text-decoration: none;

  display: flex;
  align-content: center;

  :focus-visible {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }
`;

export const StyledIcon = styled(Icon)`
  margin: var(--ads-v2-spaces-1) var(--ads-v2-spaces-2) var(--ads-v2-spaces-1) 0;
`;
