import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { CalloutProps } from "./Callout.types";
import { StyledCallout } from "./Callout.styles";

function Callout({ children, kind = "info", ...rest }: CalloutProps) {
  return (
    <StyledCallout kind={kind} {...rest}>
      {children}
    </StyledCallout>
  );
}

Callout.displayName = "Callout";

export { Callout };
