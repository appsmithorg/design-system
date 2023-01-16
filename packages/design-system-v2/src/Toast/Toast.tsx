import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ToastProps } from "./Toast.types";
import { StyledToast } from "./Toast.styles";

/**
 * TODO:
 * - Style the toast with our variables
 * - Add a variant that carries a link
 * - Add a way to attach an action to that link
 * - look up accessibility features for toasts (spectrum, MDN, what toastify does and does not support)
 * @constructor
 */

function Toast({ ...rest }: ToastProps) {
  return (
    <StyledToast
      autoClose={5000}
      className="t--toast-action"
      closeButton={false}
      hideProgressBar={true}
      position={toast.POSITION.TOP_CENTER}
      rtl={false}
      transition={Slide}
      {...rest}
    />
  );
}

Toast.displayName = "Toast";

Toast.defaultProps = {
  kind: undefined,
};

export { Toast };
