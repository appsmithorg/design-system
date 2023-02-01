import styled, { keyframes } from "styled-components";
import { Overlay, Content, Close } from "@radix-ui/react-dialog";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledOverlay = styled(Overlay)`
  /* TODO: Opacity for colors needs to be handled in a better way*/
  background-color: #39393999;
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 250ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledContent = styled(Content)`
  background-color: var(--ads-v2-color-bg);
  border-radius: var(--ads-v2-border-radius);
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  max-width: 90vw;
  max-height: 85vh;
  padding: var(--ads-v2-spaces-6) var(--ads-v2-spaces-5);
  font-family: var(--ads-v2-font-family);
  color: var(--ads-v2-color-fg);
  animation: ${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--ads-v2-font-family);
  font-size: var(--ads-v2-font-size-10);
  font-weight: 600;
  padding-bottom: var(--ads-v2-spaces-3);
`;

export const StyledClose = styled(Close)`
  all: unset;
  cursor: pointer;
`;

export const StyledBody = styled.div`
  padding-top: var(--ads-v2-spaces-3);
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: var(--ads-v2-spaces-5);
  gap: var(--ads-v2-spaces-3);
`;
