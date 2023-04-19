import React, { forwardRef, useState } from "react";
import clsx from "classnames";

import { ToggleButtonProps } from "./ToggleButton.types";
import { StyledToggleButton } from "./ToggleButton.styles";
import { ToggleClassName, ToggleIconClassName } from "./ToggleButton.constants";
import { Icon } from "Icon";

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (props, ref) => {
    const {
      className,
      icon,
      isDisabled = false,
      isSelected,
      onChange,
      size,
      ...rest
    } = props;

    const [selected, setSelected] = useState(false);

    const handleOnChange = () => {
      setSelected(!selected);
      onChange?.(!selected);
    };

    return (
      <StyledToggleButton
        className={clsx(ToggleClassName, className)}
        disabled={isDisabled}
        isSelected={isSelected ?? selected}
        size={size}
        {...rest}
        onClick={handleOnChange}
        ref={ref}
      >
        <Icon className={ToggleIconClassName} name={icon} size={size} />
      </StyledToggleButton>
    );
  },
);

ToggleButton.displayName = "ToggleButton";

ToggleButton.defaultProps = {
  size: "md",
};

export { ToggleButton };
