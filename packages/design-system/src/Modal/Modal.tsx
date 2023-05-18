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
import {
  ModalContentClassName,
  ModalContentHeaderClassName,
  ModalContentHeaderCloseButtonClassName,
} from "./Modal.constants";
import { Text } from "Text";
import { Button } from "Button";

function ModalContent(props: ModalContentProps) {
  const { children, overlayClassName, ...rest } = props;
  return (
    <Portal>
      <StyledOverlay className={overlayClassName} />
      <StyledContent {...rest} className={ModalContentClassName}>
        {children}
      </StyledContent>
    </Portal>
  );
}

function ModalHeader({ children, onClose }: ModalHeaderProps) {
  return (
    <StyledHeader className={ModalContentHeaderClassName}>
      <Text kind="heading-m" renderAs="h3">
        {children}
      </Text>
      <StyledClose
        aria-label="Close"
        asChild
        className={ModalContentHeaderCloseButtonClassName}
        onClick={onClose}
      >
        {/* Using unsafe here, asChild of radix have some issues while passing down props */}
        {/* TODO: figure a way to avoid this */}
        <Button
          UNSAFE_height="36px !important"
          UNSAFE_width="36px !important"
          isIconButton
          kind="tertiary"
          size="md"
          startIcon="close-line"
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
