import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "../Icon";
import { Kind } from "./Link.types";

const Variables = css`
  --color: var(--ads-v2-color-fg-brand);
  --text-decoration: none;
`;

const Kinds = {
  primary: css`
    --color: var(--ads-v2-color-fg-brand);
    :hover {
      --color: var(--ads-v2-color-fg-brand-emphasis);
      --text-decoration: underline;
    }
  `,
  secondary: css`
    --color: var(--ads-v2-color-fg);
    :hover {
      --color: var(--ads-v2-color-fg-emphasis);
      --text-decoration: underline;
    }
  `,
};
export const Styles = css<{ kind?: Kind }>`
  ${Variables}

  ${({ kind }) => kind && Kinds[kind]}

  font-family: var(--ads-v2-font-family);
  /* This override is needed since blueprint is applying styles on a tag. */
  /* TODO: Remove this once blueprint is removed from the main repo. */
  color: var(--color) !important;
  text-decoration: var(--text-decoration) !important;

  display: flex;
  align-content: center;

  :focus-visible {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
    text-decoration: var(--text-decoration);
  }
`;

export const StyledRouterLink = styled(RouterLink)<{ kind?: Kind }>`
  ${Styles}
`;

export const StyledAnchor = styled.a<{ kind?: Kind }>`
  ${Styles}
`;

export const StyledIcon = styled(Icon)<{
  $position: "start" | "end";
}>`
  margin-top: var(--ads-v2-spaces-1);
  margin-bottom: var(--ads-v2-spaces-1);
  margin-right: ${(props) =>
    props.$position == "start" && "var(--ads-v2-spaces-2)"};
  margin-left: ${(props) =>
    props.$position == "end" && "var(--ads-v2-spaces-2)"};
`;
