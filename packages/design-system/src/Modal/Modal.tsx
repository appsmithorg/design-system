import React from "react";
import { Portal, Root } from "@radix-ui/react-dialog";

import { ModalHeaderProps, ModalContentProps } from "./Modal.types";
import {
  StyledOverlay,
  StyledContent,
  StyledHeader,
  StyledClose,
  StyledBody,
  StyledFooter,
} from "./Modal.styles";
import { Icon } from "Icon";

function ModalContent(props: ModalContentProps) {
  const { children, ...rest } = props;
  return (
    <Portal>
      <StyledOverlay />
      <StyledContent {...rest}>{children}</StyledContent>
    </Portal>
  );
}

function ModalHeader({ children, onClose }: ModalHeaderProps) {
  return (
    <StyledHeader>
      {/* TODO: Replace this with text component */}
      {children}
      <StyledClose aria-label="Close" onClick={onClose}>
        <Icon
          color="var(--ads-v2-color-fg-muted)"
          name="close-line"
          size="24px"
        />
      </StyledClose>
    </StyledHeader>
  );
}

const Modal = Root;
const ModalBody = StyledBody;
const ModalFooter = StyledFooter;
Modal.displayName = "Modal";
ModalContent.displayName = "ModalContent";
ModalHeader.displayName = "ModalHeader";

export { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter };
