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
import { Text } from "Text";

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
      <Text as="h3" kind="heading-m">
        {children}
      </Text>
      <StyledClose
        aria-label="Close"
        asChild
        className={ModalContentHeaderCloseButtonClassName}
        onClick={onClose}
      >
        <Icon color="var(--ads-v2-color-fg)" name="close-line" size="xl" />
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
