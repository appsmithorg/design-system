import React, { forwardRef } from "react";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useDOMRef } from "Hooks/useDomRef";
import { Icon } from "Icon";

const ButtonV2 = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const {
      as,
      children,
      endIcon,
      height,
      kind,
      size,
      startIcon,
      width,
      ...rest
    } = props;
    const buttonRef = useDOMRef(ref);
    const { buttonProps } = useButton(
      {
        ...rest,
        elementType: as,
      } as AriaButtonProps,
      buttonRef,
    );
    return (
      <StyledButton
        as={as || "button"}
        {...buttonProps}
        height={height}
        kind={kind}
        ref={buttonRef}
        size={size}
        width={width}
      >
        {startIcon && typeof startIcon === "string" && (
          <Icon name={startIcon} />
        )}
        {startIcon && typeof startIcon !== "string" && <Icon>{startIcon}</Icon>}
        {children}
        {endIcon && typeof endIcon === "string" && <Icon name={endIcon} />}
        {endIcon && typeof endIcon !== "string" && <Icon>{endIcon}</Icon>}
      </StyledButton>
    );
  },
);

ButtonV2.displayName = "Button";

ButtonV2.defaultProps = {
  size: "sm",
  kind: "primary",
  isLoading: false,
  disabled: false,
};

export { ButtonV2 };
