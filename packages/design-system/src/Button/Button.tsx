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
      children,
      className,
      endIcon,
      isIconButton,
      isLoading,
      kind,
      renderAs,
      size,
      startIcon,
      UNSAFE_height,
      UNSAFE_width,
      ...rest
    } = props;
    // disable button when loading
    rest.onPress = props.isLoading ? undefined : props.onPress;
    console.log(rest.onPress);
    console.log("click", rest.onPointerDown);
    const buttonRef = useDOMRef(ref);
    const { buttonProps } = useButton(
      {
        ...rest,
        elementType: renderAs,
      } as AriaButtonProps,
      buttonRef,
    );

    return (
      <StyledButton
        as={renderAs || "button"}
        {...buttonProps}
        UNSAFE_height={UNSAFE_height}
        UNSAFE_width={UNSAFE_width}
        className={clsx(ButtonClassName, className)}
        data-loading={isLoading}
        isIconButton={isIconButton}
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
            size="md"
          />
        )}

        {/* Button content */}
        <ButtonContent
          className={ButtonContentClassName}
          isIconButton={isIconButton}
          size={size}
        >
          {/* Start Icon Section */}
          {startIcon ? (
            <Icon
              className={ButtonContentIconStartClassName}
              name={startIcon}
              size="md"
            />
          ) : null}

          {/* Children section */}
          {children && (
            <span className={ButtonContentChildrenClassName}>{children}</span>
          )}

          {/* End Icon Section */}
          {endIcon ? (
            <Icon
              className={ButtonContentIconEndClassName}
              name={endIcon}
              size="md"
            />
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
