import React from "react";
import { StyledToggle } from "./Toggle.styles";
import { ToggleProps } from "./Toggle.types";

export default function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

const Toggle = (props: ToggleProps) => {
  const { checked, ...rest } = props;

  return (
    <StyledToggle
      type="checkbox"
      role="switch"
      defaultChecked={checked}
      {...rest}
    />
  );
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
};

export { Toggle };
