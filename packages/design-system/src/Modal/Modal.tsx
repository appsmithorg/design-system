import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { ModalProps } from "./Modal.types";
import { StyledModal } from "./Modal.styles";

function Modal(props: ModalProps) {
  return <StyledModal {...rest}>{children}</StyledModal>;
}

Modal.displayName = "Modal";

Modal.defaultProps = {};

export { Modal };
