import styled, { css } from "styled-components";
import { Kind } from "./Callout.types";

const Variables = css`
  --callout-color-background: var(--ads-v2-color-bg);
`;

const Kinds = {
  success: css`
    --callout-color-background: var(--ads-v2-color-bg-success);
  `,
  warning: css`
    --callout-color-background: var(--ads-v2-color-bg-warning);
  `,
  info: css`
    --callout-color-background: var(--ads-v2-color-bg-information);
  `,
  error: css`
    --callout-color-background: var(--ads-v2-color-bg-error);
  `,
};

export const StyledCallout = styled.div<{
  // Props that affect styles are passed through here.
  kind: Kind;
}>`
  ${Variables}

  ${({ kind }) => kind && Kinds[kind]}

  // TODO: get minh, minw from vasanth (with all optionals switched off)
  width: 450px;
  height: 88px;

  background-color: var(--callout-color-background);
`;
