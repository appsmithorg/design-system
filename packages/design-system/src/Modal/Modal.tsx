import React from "react";
import {
  DialogTriggerProps,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dialog";
import clsx from "classnames";

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
  const { children, className, ...rest } = props;
  return (
    <Portal>
      <StyledOverlay />
      <StyledContent
        className={clsx(ModalContentClassName, className)}
        {...rest}
      >
        {children}
      </StyledContent>
    </Portal>
  );
}

function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <StyledHeader className={ModalContentHeaderClassName}>
      <Text kind="heading-m" renderAs="h3">
        {children}
      </Text>
      <StyledClose
        aria-label="Close"
        asChild
        className={ModalContentHeaderCloseButtonClassName}
      >
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

function ModalTrigger(props: DialogTriggerProps) {
  return (
    <Trigger {...props} asChild>
      {props.children}
    </Trigger>
  );
}

const Modal = Root;
const ModalBody = StyledBody;
const ModalFooter = StyledFooter;
Modal.displayName = "Modal";
ModalContent.displayName = "ModalContent";
ModalHeader.displayName = "ModalHeader";

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTrigger,
};
