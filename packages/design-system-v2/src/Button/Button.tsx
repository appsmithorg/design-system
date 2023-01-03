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
        {children}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  size: "sm",
  kind: "primary",
}

export { Button };
