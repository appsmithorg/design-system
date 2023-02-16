import React from "react";

import { MenuProps } from "./Menu.types";
import { StyledMenu } from "./Menu.styles";

function Menu(props: MenuProps) {
  return <StyledMenu>hi</StyledMenu>;
}

Menu.displayName = "Menu";

Menu.defaultProps = {};

export { Menu };
