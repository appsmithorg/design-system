import styled, { css } from "styled-components";
import * as RadixTabs from "@radix-ui/react-tabs";

const Variables = css`
  --tab-color: var(--ads-v2-color-fg-muted);
  --tab-selection-color: transparent;
`;

export const StyledTabsList = styled(RadixTabs.List)`
  border-bottom: 1px solid var(--ads-v2-color-border);
  display: flex;
  gap: var(--ads-v2-spaces-4);
`;

export const StyledTabPanel = styled(RadixTabs.Content)`
  margin-top: var(--ads-v2-spaces-4);
`;
export const StyledTab = styled(RadixTabs.TabsTrigger)`
  ${Variables};

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  cursor: pointer;
  padding: var(--ads-v2-spaces-2);
  padding-bottom: var(--ads-v2-spaces-3);
  background-color: var(--ads-v2-color-bg);
  border: none; // get rid of button styles
  color: var(--tab-color);

  &:after {
    content: "";
    height: 2px;
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    background-color: var(--tab-selection-color);
  }

  &:hover {
    --tab-selection-color: var(--ads-v2-color-border);
    --tab-color: var(--ads-v2-color-fg);
  }

  &[aria-selected="true"],
  &:active {
    --tab-selection-color: var(--ads-v2-color-border-brand);
    --tab-color: var(--ads-v2-color-fg);
  }

  &:focus {
    --tab-color: var(--ads-v2-color-fg);
  }
`;
