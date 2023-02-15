import React from "react";
import _ from "lodash";
import { useFocusRing } from "@react-aria/focus";
import { Slide, toast as toastifyToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ToastProps } from "./Toast.types";
import { StyledButton, StyledToast, ToastBody } from "./Toast.styles";
import { getIconByKind } from "../__theme__/getIconByKind";

/**
 * TODO:
 * - Look up accessibility features for toasts (spectrum, MDN, what toastify does and does not support)
 * @constructor
 */

function Toast({ ...rest }: ToastProps) {
  return (
    <StyledToast
      autoClose={5000}
      closeButton={false}
      draggable={false}
      hideProgressBar
      position={toastifyToast.POSITION.TOP_CENTER}
      rtl={false}
      transition={Slide}
      {...rest}
    />
  );
}

// content is of type string and not type ToastContent because we do not want to
// allow developers to pass in their own components.
function toast(content: string, options?: ToastProps) {
  const actionText = _.capitalize(options?.action?.actionText);
  const icon = getIconByKind(options?.kind);
  return toastifyToast(
    <ToastBody kind="body-m">
      {content}
      {actionText && (
        <StyledButton
          kind="tertiary"
          onPress={() => {
            options?.action?.effect && options?.action?.effect();
            toastifyToast.dismiss();
          }}
        >
          {actionText}
        </StyledButton>
      )}
    </ToastBody>,
    {
      icon: icon,
      type: options?.kind,
      closeOnClick: !actionText,
      ...options,
    },
  );
}

Toast.displayName = "Toast";

Toast.defaultProps = {
  kind: undefined,
};

export { Toast, toast };
