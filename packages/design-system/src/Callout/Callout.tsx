import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { CalloutProps } from "./Callout.types";
import { StyledCallout } from "./Callout.styles";

function Callout({ children, YOUR_PROPS, ...rest }: CalloutProps) {
  return <StyledCallout {...rest}>{children}</StyledCallout>;
}

Callout.displayName = "Callout";

Callout.defaultProps = {};

export { Callout };
