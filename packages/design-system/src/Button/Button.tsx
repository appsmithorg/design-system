import React, { forwardRef } from "react";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";
import clsx from "classnames";

import { StyledButton, ButtonContent } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useDOMRef } from "Hooks/useDomRef";
import { Icon } from "Icon";
import {
  ButtonClassName,
  ButtonLoadingClassName,
  ButtonLoadingIconClassName,
  ButtonContentClassName,
  ButtonContentChildrenClassName,
  ButtonContentIconStartClassName,
  ButtonContentIconEndClassName,
} from "./Button.constants";
import { Spinner } from "Spinner";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const {
      as,
      children,
      className,
      endIcon,
      isLoading,
      kind,
      size,
      startIcon,
      UNSAFE_height,
      UNSAFE_width,
      ...rest
    } = props;
    // disable button when loading
    rest.onPress = props.isLoading ? undefined : props.onPress;
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
        UNSAFE_height={UNSAFE_height}
        UNSAFE_width={UNSAFE_width}
        className={clsx(ButtonClassName, className)}
        data-loading={isLoading}
        kind={kind}
        ref={buttonRef}
        size={size}
      >
        {/* Loading section */}
        {isLoading === true && (
          <Spinner
            className={ButtonLoadingClassName}
            iconProps={{
              className: ButtonLoadingIconClassName,
            }}
            size={size}
          />
        )}

        {/* Button content */}
        <ButtonContent className={ButtonContentClassName} size={size}>
          {/* Start Icon Section */}
          {startIcon ? (
            typeof startIcon === "string" ? (
              <Icon
                className={ButtonContentIconStartClassName}
                name={startIcon}
                size={size}
              />
            ) : (
              <Icon className={ButtonContentIconStartClassName} size={size}>
                {startIcon}
              </Icon>
            )
          ) : null}

          {/* Children section */}
          {children && (
            <span className={ButtonContentChildrenClassName}>{children}</span>
          )}

          {/* End Icon Section */}
          {endIcon ? (
            typeof endIcon === "string" ? (
              <Icon
                className={ButtonContentIconEndClassName}
                name={endIcon}
                size={size}
              />
            ) : (
              <Icon className={ButtonContentIconEndClassName} size={size}>
                {endIcon}
              </Icon>
            )
          ) : null}
        </ButtonContent>
      </StyledButton>
    );
  },
);

Button.displayName = "Button";

Button.defaultProps = {
  size: "sm",
  kind: "primary",
  isLoading: false,
  isDisabled: false,
};

export { Button };
