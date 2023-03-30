import styled from "styled-components";

export const StyledSegmentedControl = styled.div<{
  isDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ads-v2-spaces-2);
  background-color: var(--ads-v2-color-bg-subtle);
  padding: var(--ads-v2-spaces-1);
  /* outer radius = inner radius + padding */
  border-radius: calc(var(--ads-v2-border-radius) + var(--ads-v2-spaces-1));
  box-sizing: border-box;
`;

export const StyledSegment = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: var(--ads-v2-spaces-2);
  height: 100%;
  border: 1px solid transparent;
  user-select: none;
  border-radius: var(--ads-v2-border-radius);
  padding: var(--ads-v2-spaces-2) var(--ads-v2-spaces-3);

  & > * {
    color: var(--ads-v2-color-fg-muted);
  }
`;

export const StyledControlContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid transparent;
  border-radius: var(--ads-v2-border-radius);
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
  transition: box-shadow 600ms ease;

  &[data-disabled="true"] {
    opacity: var(--ads-v2-opacity-disabled);
    cursor: not-allowed !important;
  }

  &[data-selected="true"] {
    background-color: var(--ads-v2-color-bg);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);

    & > ${StyledSegment} > * {
      color: var(--ads-v2-color-fg);
    }
  }

  /* Select all segments which is not a selected and last child */
  &:not(:last-child):not([data-selected="true"]):after {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: var(--ads-v2-color-bg-emphasis);
  }

  /* This before is to mask the separator in left side of selected control */
  &[data-selected="true"]:not(:first-child):after {
    content: "";
    position: absolute;
    left: -7px;
    width: 2px;
    height: 16px;
    background-color: var(--ads-v2-color-bg-subtle);
  }
`;
