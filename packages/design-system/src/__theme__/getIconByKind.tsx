import React from "react";
import { Icon } from "../Icon";
import { Kinds } from "../__config__/types";

export function getIconByKind(kind: Kinds) {
  switch (kind) {
    case "success":
      return (
        <Icon
          color="var(--ads-v2-color-fg-success)"
          name="checkbox-circle-fill"
          size="lg"
        />
      );

    case "error":
      return (
        <Icon
          color="var(--ads-v2-color-fg-error)"
          name="close-circle-fill"
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
          name="information-fill"
          size="lg"
        />
      );

    // TODO: handle errors here
    default:
      return null;
  }
}
