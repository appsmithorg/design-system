import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { MenuProps } from "./Menu.types";
import { StyledMenu } from "./Menu.styles";

function Menu({ children, YOUR_PROPS, ...rest }: MenuProps) {
  return <StyledMenu {...rest}>{children}</StyledMenu>;
}

Menu.displayName = "Menu";

Menu.defaultProps = {};

export { Menu };
