import React from "react";
import clsx from "classnames";

import { FlexProps } from "./Flex.types";
import { FlexClassName } from "./Flex.constants";
import { StyledFlex } from "./Flex.styles";

function Flex({ children, className, ...rest }: FlexProps) {
  return (
    <StyledFlex className={clsx(FlexClassName, className)} {...rest}>
      {children}
    </StyledFlex>
  );
}

Flex.displayName = "Flex";

export { Flex };
