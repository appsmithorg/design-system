import styled, { css } from "styled-components";
import { PopoverSize } from "./Popover.types";
import { Close, Content } from "@radix-ui/react-popover";
import { Text } from "../Text";

const Variables = css`
  --popover-padding: var(--ads-v2-spaces-4);
  --popover-width: unset;
  --popover-max-height: unset;
`;

// Variant style definitions
const Size = {
  sm: css`
    --popover-padding: var(--ads-v2-spaces-4);
    --popover-width: 250px;
    --popover-max-height: 400px;
  `,
  md: css`
    --popover-padding: var(--ads-v2-spaces-5);
    --popover-width: 400px;
    --popover-max-height: 600px;
  `,
};

export const StyledContent = styled(Content)<{ $size: PopoverSize }>`
  ${Variables};

  ${({ $size }) => $size && Size[$size]};

  padding: var(--popover-padding);

  background-color: var(--ads-v2-color-bg);
  border: 1px solid var(--ads-v2-color-border);
  border-radius: var(--ads-v2-border-radius);
  box-shadow: var(--ads-v2-shadow-popovers);

  min-width: var(--popover-min-width);
  max-width: var(--popover-max-width);
  max-height: var(--popover-max-height);
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// TODO: Replace below rules with correct text kind when text is developed.
export const StyledHeaderText = styled(Text)`
  --color: var(--ads-v2-color-fg-emphasis);
  --font-size: var(--ads-v2-font-size-6);
  --font-weight: 600;
  --line-height: 1.5;
`;

export const StyledClose = styled(Close)`
  all: unset;
  cursor: pointer;
`;

export const StyledBody = styled.div`
  padding-top: var(--ads-v2-spaces-4);
  flex: 1;
`;
