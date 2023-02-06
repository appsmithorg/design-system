import React from "react";
import {
  StyledToggle,
  StyledToggleInput,
  StyledToggleLabel,
} from "./Toggle.styles";
import { ToggleProps } from "./Toggle.types";

/**
 * TODO:
 * Add label
 * group's min and max width
 * is label optional?
 * fix square thumb
 * confirm all colors work as expected on all states
 * use with yalc in main repo
 *
 * This Toggle will expand to fill all available space
 *
 * @param props
 * @constructor
 */
const Toggle = (props: ToggleProps) => {
  const { checked, onChange, children, isDisabled, ...rest } = props;

  return (
    <StyledToggle isDisabled={isDisabled}>
      <StyledToggleLabel>
        {children}
        <StyledToggleInput
          type="checkbox"
          role="switch"
          defaultChecked={checked}
          onChange={onChange}
          {...rest}
        />
      </StyledToggleLabel>
    </StyledToggle>
  );
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
};

export { Toggle };
