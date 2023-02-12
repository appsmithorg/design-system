import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { TabProps } from "./Tab.types";
import { StyledTab } from "./Tab.styles";

function Tab({ children, YOUR_PROPS, ...rest }: TabProps) {
  return <StyledTab {...rest}>{children}</StyledTab>;
}

Tab.displayName = "Tab";

Tab.defaultProps = {};

export { Tab };
