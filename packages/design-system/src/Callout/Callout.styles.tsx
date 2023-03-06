import styled, { css } from "styled-components";
import { Kind } from "./Callout.types";
import { Button } from "Button";
import { Text } from "Text";

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
  isClosed?: boolean;
  kind: Kind;
}>`
  ${Variables}

  ${({ kind }) => kind && Kinds[kind]}

  // TODO: get minh, minw from vasanth (with all optionals switched off)
  width: 450px;
  min-height: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--ads-v2-spaces-3);
  border-radius: var(--ads-v2-border-radius);
  padding: var(--ads-v2-spaces-3) var(--ads-v2-spaces-4);

  background-color: var(--callout-color-background);

  ${({ isClosed }) => isClosed && `display: none;`}
`;

export const StyledCloseIcon = styled(Button)`
  margin-left: auto;
  cursor: pointer;
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--ads-v2-spaces-4);
  margin-top: var(--ads-v2-spaces-3);
  margin-bottom: var(--ads-v2-spaces-1);
`;

export const StyledIconContainer = styled.div`
  margin-top: var(--ads-v2-spaces-1);
`;

export const StyledChildrenContainer = styled.div`
  margin-top: var(--ads-v2-spaces-1);
`;

export const StyledChildren = styled(Text)`
  color: var(--ads-v2-color-fg-emphasis);
`;
