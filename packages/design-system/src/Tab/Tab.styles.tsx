import styled, { css } from "styled-components";

const Variables = css`
  --tab-color-border-bottom: transparent;
  // TODO: muted doesn't look good here as a default, and neither does subtle.
  // We need a 600 for this.
  --tab-color: var(--ads-v2-color-fg-muted);
`;

export const StyledTab = styled.div<{}>`
  ${Variables} :not(:first-child) {
    margin-left: 0.75rem;
  }
  :not(:last-child) {
    margin-right: 0.75rem;
  }

  :hover {
    --tab-color-border-bottom: var(--ads-v2-color-border-emphasis);
    --tab-color: var(--ads-v2-color-fg-emphasis);
  }

  :focus {
    --tab-color-border-bottom: var(--ads-v2-color-border-brand);
    --tab-color: var(--ads-v2-color-fg-emphasis);
  }

  border-bottom: 3px solid var(--tab-color-border-bottom);
  color: var(--tab-color);
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
