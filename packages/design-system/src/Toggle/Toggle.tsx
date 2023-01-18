import React from "react";
import { StyledToggle } from "./Toggle.styles";
import { ToggleProps } from "./Toggle.types";

const Toggle = (props: ToggleProps) => {
  const { checked, onChange, ...rest } = props;

  return (
    <StyledToggle
      type="checkbox"
      role="switch"
      defaultChecked={checked}
      onChange={onChange}
      {...rest}
    />
  );
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
};

export { Toggle };
