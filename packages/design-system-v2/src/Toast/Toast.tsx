import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { Slide, toast as toastifyToast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ToastProps } from "./Toast.types";
import { StyledToast, ToastBody } from "./Toast.styles";

/**
 * TODO:
 * - Add a variant that carries a link
 * - Add a way to attach an action to that link
 * - look up accessibility features for toasts (spectrum, MDN, what toastify does and does not support)
 * - use <Icon /> for the kinds of toast
 * @constructor
 */

function Toast({ ...rest }: ToastProps) {
  return (
    <StyledToast
      autoClose={5000}
      className="t--toast-action"
      closeButton={false}
      hideProgressBar={true}
      position={toastifyToast.POSITION.TOP_CENTER}
      rtl={false}
      transition={Slide}
      {...rest}
    />
  );
}

// content is of type string and not type ToastContent because we do not want to
// allow developers to pass in their own components.
function toast(content: string, options?: ToastOptions) {
  return toastifyToast(<ToastBody>{content}</ToastBody>, { ...options });
}

Toast.displayName = "Toast";

Toast.defaultProps = {
};

export { Toast, toast };
