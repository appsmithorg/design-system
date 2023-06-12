import React from "react";
import { Icon } from "./index";
import { Kind } from "../__config__/types";

export function getIconByKind(kind: Kind) {
  switch (kind) {
    case "success":
      return (
        <Icon
          color="var(--ads-v2-color-fg-success)"
          name="oval-check-fill"
          size="lg"
        />
      );

    case "error":
      return (
        <Icon
          color="var(--ads-v2-color-fg-error)"
          name="close-circle"
          size="lg"
        />
      );

    case "warning":
      return (
        <Icon
          color="var(--ads-v2-color-fg-warning)"
          name="alert-fill"
          size="lg"
        />
      );

    case "info":
      return (
        <Icon
          color="var(--ads-v2-color-fg-information)"
          name="info-fill"
          size="lg"
        />
      );

    // TODO: handle errors here
    default:
      return null;
  }
}
