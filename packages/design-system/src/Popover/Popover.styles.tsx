import styled, { css } from "styled-components";
import { PopoverSize } from "./Popover.types";
import { Close, Content } from "@radix-ui/react-popover";

const Variables = css`
  --popover-padding: var(--ads-v2-spaces-4);
  --popover-min-width: unset;
  --popover-max-width: unset;
  --popover-max-height: unset;
`;

// Variant style definitions
const Size = {
  sm: css`
    --popover-padding: var(--ads-v2-spaces-4);
    --popover-min-width: 23vw;
    --popover-max-width: 34vw;
    --popover-max-height: 57.5vh;
  `,
  md: css`
    --popover-padding: var(--ads-v2-spaces-5);
    --popover-min-width: 52.7vw;
    --popover-max-width: 57.53vw;
    --popover-max-height: 41.93vh;
  `,
};

export const StyledContent = styled(Content)<{ $size: PopoverSize }>`
  ${Variables};

  ${({ $size }) => $size && Size[$size]};

  padding: var(--popover-padding);

  background-color: var(--ads-v2-color-bg);
  border: 1px solid var(--ads-v2-color-border);
  border-radius: var(--ads-v2-border-radius);

  min-width: var(--popover-min-width);
  max-width: var(--popover-max-width);
  max-height: var(--popover-max-height);

  overflow-y: scroll;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledClose = styled(Close)`
  all: unset;
  cursor: pointer;
`;

export const StyledBody = styled.div`
  padding-top: var(--ads-v2-spaces-4);
  flex: 1;
  overflow-y: auto;
`;
