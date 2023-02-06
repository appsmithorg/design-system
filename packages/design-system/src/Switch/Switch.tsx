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
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledSwitch className={SwitchClassName}>
      <StyledSwitchLabel
        isDisabled={props.isDisabled}
        className={SwitchClassNameLabel}
      >
        {props.children}
        <StyledSwitchInput {...inputProps} {...focusProps} ref={ref} />
      </StyledSwitchLabel>
    </StyledSwitch>
  );
}

Switch.displayName = "Switch";

Switch.defaultProps = {};

export { Switch };
