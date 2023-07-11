import styled from "styled-components";

export const StyledCollapsibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  gap: var(--ads-v2-spaces-2);
`;

export const StyledCollapsibleHeader = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--ads-v2-spaces-2);
  padding: var(--ads-v2-spaces-2) var(--ads-v2-spaces-0);
`;

export const StyledCollapsibleContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  overflow: hidden;
  flex-direction: column;
`;
