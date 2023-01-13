import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ToastProps } from "./Toast.types";
import { StyledToast } from "./Toast.styles";

function Toast({ children, YOUR_PROPS, ...rest }: ToastProps) {
  return <ToastContainer />;
  // return <StyledToast {...rest}>{children}</StyledToast>;
}

Toast.displayName = "Toast";

Toast.defaultProps = {};

export { Toast };
