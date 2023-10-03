import React from "react";
import clsx from "classnames";

import { BoxProps } from "./Box.types";
import { BoxClassName } from "./Box.constants";
import { StyledBox } from "./Box.styles";

function Box({ children, className, ...rest }: BoxProps) {
  return (
    <StyledBox className={clsx(BoxClassName, className)} {...rest}>
      {children}
    </StyledBox>
  );
}

Box.displayName = "Box";

Box.defaultProps = {};

export { Box };
