import React, { forwardRef } from "react";

import { StyledButton } from "./Button.styles";
import  { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, buttonRef): JSX.Element => {

    const {
      as,
      children,
      ...rest
    } = props;

    return (
      <StyledButton as={as || "button"} {...rest} ref={buttonRef}>
        <span>0</span>
        {children}
        <span>0</span>
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  size: "sm",
  variant: "default",
}

export { Button };
