import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { useToggleState } from "@react-stately/toggle";
import { useSwitch } from "@react-aria/switch";

import { SwitchProps } from "./Switch.types";
import {
  StyledSwitch,
  StyledSwitchLabel,
  StyledSwitchInput,
} from "./Switch.styles";
import { SwitchClassName, SwitchClassNameLabel } from "./Switch.constants";

function Switch(props: SwitchProps) {
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <StyledSwitch className={SwitchClassName}>
      <StyledSwitchLabel
        className={SwitchClassNameLabel}
        isDisabled={props.isDisabled}
        renderAs="label"
      >
        {props.children}
        <StyledSwitchInput
          {...inputProps}
          {...focusProps}
          isFocusVisible={isFocusVisible}
          ref={ref}
        />
      </StyledSwitchLabel>
    </StyledSwitch>
  );
}

Switch.displayName = "Switch";

Switch.defaultProps = {};

export { Switch };
