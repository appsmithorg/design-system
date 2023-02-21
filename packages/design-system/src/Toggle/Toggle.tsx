import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { ToggleProps } from "./Toggle.types";
import { StyledToggle } from "./Toggle.styles";

function Toggle({ children, ...rest }: ToggleProps) {
  return <StyledToggle {...rest}>{children}</StyledToggle>;
}

Toggle.displayName = "Toggle";

Toggle.defaultProps = {
  size: "md",
};

export { Toggle };
