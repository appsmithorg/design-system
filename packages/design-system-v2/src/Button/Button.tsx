import React, { forwardRef } from "react";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useDOMRef } from "Hooks/useDomRef";

const ButtonV2 = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const { as, children, height, kind, size, width, ...rest } = props;
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
        {children}
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
