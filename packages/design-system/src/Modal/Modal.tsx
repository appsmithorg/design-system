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
import {
  ModalContentClassName,
  ModalContentHeaderClassName,
  ModalContentHeaderCloseButtonClassName,
} from "./Modal.constants";

function ModalContent(props: ModalContentProps) {
  const { children, ...rest } = props;
  return (
    <Portal>
      <StyledOverlay />
      <StyledContent {...rest} className={ModalContentClassName}>
        {children}
      </StyledContent>
    </Portal>
  );
}

function ModalHeader({ children, onClose }: ModalHeaderProps) {
  return (
    <StyledHeader className={ModalContentHeaderClassName}>
      {/* TODO: Replace this with text component */}
      {children}
      <StyledClose
        aria-label="Close"
        className={ModalContentHeaderCloseButtonClassName}
        onClick={onClose}
      >
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
