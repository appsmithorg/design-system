import styled, { css } from "styled-components";
import { PopoverSize } from "./Popover.types";
import { Close, Content } from "@radix-ui/react-popover";

const Variables = css`
  --popover-padding: var(--ads-v2-spaces-4);
`;

// Variant style definitions
const Size = {
  sm: css`
    --popover-padding: var(--ads-v2-spaces-4);
  `,
  md: css`
    --popover-padding: var(--ads-v2-spaces-5);
  `,
};

export const StyledContent = styled(Content)<{ $size: PopoverSize }>`
  ${Variables};

  ${({ $size }) => $size && Size[$size]};

  padding: var(--popover-padding);

  background-color: var(--ads-v2-color-bg);
  border: 1px solid var(--ads-v2-color-border);
  border-radius: var(--ads-v2-border-radius);

  /* Additional styles and classes */
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
