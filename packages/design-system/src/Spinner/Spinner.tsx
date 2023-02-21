import React from "react";
import clsx from "classnames";

import { SpinnerProps } from "./Spinner.types";
import { StyledSpinner } from "./Spinner.styles";
import { Icon } from "Icon";
import { SpinnerClassName, SpinnerIconClassName } from "./Spinner.constants";

function Spinner(props: SpinnerProps) {
  const { className, iconProps, size: spinnerSize = "sm", ...rest } = props;
  const classes = clsx(SpinnerClassName, className);
  const iconClasses = clsx(
    SpinnerIconClassName,
    iconProps && iconProps.className,
  );

  return (
    <StyledSpinner {...rest} className={classes}>
      <Icon
        {...iconProps}
        className={iconClasses}
        icon="loader-line"
        size={spinnerSize} // IconProps of size will be ignored by the spinner
      />
    </StyledSpinner>
  );
}

Spinner.displayName = "Spinner";

Spinner.defaultProps = {};

export { Spinner };
