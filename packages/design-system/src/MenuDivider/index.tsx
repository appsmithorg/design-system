import styled from "styled-components";
import React from "react";

type MenuDividerProps = {
  direction?: "horizontal" | "vertical";
  fullWidth?: boolean;
};

const StyledMenuDivider = styled.div<MenuDividerProps>`
  ${(props) =>
    props.direction == "horizontal"
      ? `border-top: 1px solid var(--ads-menu-divider-border-color);
         margin: var(--ads-spaces-1) ${
           props.fullWidth === false ? "var(--ads-spaces-6)" : "0px"
         };`
      : `border-left: 1px solid var(--ads-menu-divider-border-color);
         margin: ${
           props.fullWidth === false ? "var(--ads-spaces-6)" : "0px"
         } var(--ads-spaces-1);`}
`;

const MenuDivider = ({
  direction = "horizontal",
  fullWidth = false,
}: MenuDividerProps) => {
  return <StyledMenuDivider direction={direction} fullWidth={fullWidth} />;
};

export default MenuDivider;
