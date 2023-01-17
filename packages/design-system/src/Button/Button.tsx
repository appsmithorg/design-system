import React, { forwardRef } from "react";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useDOMRef } from "Hooks/useDomRef";
import { Icon } from "Icon";
import { ButtonIconClassName } from "./Button.constants";

const ButtonV2 = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const {
      as,
      children,
      disabled,
      endIcon,
      height,
      isLoading,
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
        disabled={disabled}
        height={height}
        isLoading={isLoading}
        kind={kind}
        ref={buttonRef}
        size={size}
        width={width}
      >
        {isLoading ? (
          // TODO: add a loader component
          <Icon className={ButtonIconClassName} name="loader-5-line" />
        ) : (
          <>
            {/* Start Icon Section */}
            {startIcon ? (
              typeof startIcon === "string" ? (
                <Icon className={ButtonIconClassName} name={startIcon} />
              ) : (
                <Icon className={ButtonIconClassName}>{startIcon}</Icon>
              )
            ) : null}
            {/* Children section */}
            {children}
            {/* End Icon Section */}
            {endIcon ? (
              typeof endIcon === "string" ? (
                <Icon className={ButtonIconClassName} name={endIcon} />
              ) : (
                <Icon className={ButtonIconClassName}>{endIcon}</Icon>
              )
            ) : null}
          </>
        )}
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
