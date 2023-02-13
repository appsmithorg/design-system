import styled, { css } from "styled-components";
import * as RadixTabs from "@radix-ui/react-tabs";

const Variables = css`
  --tab-color: var(--ads-v2-color-fg-muted);
  //--tab-border-bottom: none;
  --tab-border-bottom: 1px solid var(--ads-v2-color-border);
`;

export const StyledTabsList = styled(RadixTabs.List)`
  //border-bottom: 1px solid var(--ads-v2-color-border);
`;
export const StyledTab = styled(RadixTabs.TabsTrigger)`
  ${Variables};

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  &:hover {
    --tab-border-bottom: 2px solid var(--ads-v2-color-border);
    --tab-color: var(--ads-v2-color-fg);
  }

  &[aria-selected="true"],
  &:active {
    --tab-border-bottom: 2px solid var(--ads-v2-color-border-brand);
    --tab-color: var(--ads-v2-color-fg);
  }

  &:focus {
    --tab-color: var(--ads-v2-color-fg);
  }

  background-color: var(--ads-v2-color-bg);
  border: none; // get rid of button styles
  border-bottom: var(--tab-border-bottom);
  color: var(--tab-color);

  :not(:first-child) {
    //margin-left: var(--ads-v2-spaces-2);
    padding-left: var(--ads-v2-spaces-2);
  }
  :not(:last-child) {
    //margin-right: var(--ads-v2-spaces-2);
    padding-right: var(--ads-v2-spaces-2);
  }

  padding-bottom: var(--ads-v2-spaces-3);
`;
