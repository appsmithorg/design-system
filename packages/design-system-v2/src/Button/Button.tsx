import React, { forwardRef } from "react";
import { createPolymorphicComponent } from "@mantine/utils";

import { StyledButton } from "./Button.styles";
import  { ButtonProps } from "./Button.types";

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, buttonRef): JSX.Element => {
    return (
      <StyledButton {...props} ref={buttonRef}>
        <span>0</span>
        {props.children}
        <span>0</span>
      </StyledButton>
    );
  }
);

ButtonComponent.defaultProps = {
  size: "sm",
  variant: "default",
}

export const Button = createPolymorphicComponent<"button", ButtonProps>(
  ButtonComponent,
);
