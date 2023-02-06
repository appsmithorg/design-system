import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { Slide, toast as toastifyToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Kind, ToastProps } from "./Toast.types";
import { StyledToast, ToastBody } from "./Toast.styles";
import { Icon } from "../Icon";

/**
 * TODO:
 * - Add a variant that carries a link
 * - Add a way to attach an action to that link
 * - Look up accessibility features for toasts (spectrum, MDN, what toastify does and does not support)
 * - Add a control for the content of toast in the story
 * @constructor
 */

function Toast({ ...rest }: ToastProps) {
  return (
    <StyledToast
      autoClose={5000}
      closeButton={false}
      draggable={false}
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
function toast(content: string, options?: ToastProps) {
  const icon = getIconForToast(options?.kind);
  return toastifyToast(<ToastBody>{content}</ToastBody>, {
    icon: icon,
    type: options?.kind,
    ...options,
  });
}

function getIconForToast(kind: Kind) {
  switch (kind) {
    case "success":
      return (
        <Icon
          name="checkbox-circle-fill"
          color="var(--ads-v2-color-fg-success)"
          size="16px"
        />
      );

    case "error":
      return (
        <Icon
          name="close-circle-fill"
          color="var(--ads-v2-color-fg-error)"
          size="16px"
        />
      );
    default:
      return null;
  }
}

Toast.displayName = "Toast";

Toast.defaultProps = {
  kind: undefined,
};

export { Toast, toast };