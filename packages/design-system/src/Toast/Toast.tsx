import React from "react";
import _ from "lodash";
import { useFocusRing } from "@react-aria/focus";
import { Slide, toast as toastifyToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Kind, ToastProps } from "./Toast.types";
import { StyledButton, StyledToast, ToastBody } from "./Toast.styles";
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
  const icon = getIconForToast(options?.kind);
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

function getIconForToast(kind: Kind) {
  switch (kind) {
    case "success":
      return (
        <Icon
          color="var(--ads-v2-color-fg-success)"
          name="checkbox-circle-fill"
          size="md"
        />
      );

    case "error":
      return (
        <Icon
          color="var(--ads-v2-color-fg-error)"
          name="close-circle-fill"
          size="md"
        />
      );

    case "warning":
      return (
        <Icon
          color="var(--ads-v2-color-fg-warning)"
          name="alert-fill"
          size="md"
        />
      );

    case "info":
      return (
        <Icon
          color="var(--ads-v2-color-fg-information)"
          name="information-fill"
          size="md"
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
