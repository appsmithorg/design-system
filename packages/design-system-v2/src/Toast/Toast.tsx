import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ToastProps } from "./Toast.types";
import { StyledToast } from "./Toast.styles";

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
