import styled, { css } from "styled-components";

const Variables = css`
  --tab-color-border-bottom: transparent;
`;

export const StyledTab = styled.div<{}>`
  ${Variables}

  :not(:first-child) {
    margin-left: var(--ads-v2-spaces-3);
  }
  :not(:last-child) {
    margin-right: var(--ads-v2-spaces-3);
  }

  :hover {
    --tab-color-border-bottom: var(--ads-v2-color-border);
  }

  :focus {
    --tab-color-border-bottom: var(--ads-v2-color-border-brand);
  }

  &[aria-selected="true"] {
    --tab-color-border-bottom: var(--ads-v2-color-border-brand);
  }

  border-bottom: 2px solid var(--tab-color-border-bottom);
`;

export const StyledTabList = styled.div`
  display: flex;

  box-sizing: border-box;
  height: 2rem;
  border-bottom: 1px solid var(--ads-v2-color-border);
`;

export const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTabPanel = styled.div`
  margin-top: var(--ads-v2-spaces-5);
`;
