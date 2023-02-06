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

function Switch(props: SwitchProps) {
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  // state.isSelected, props.isDisabled
  return (
    <StyledSwitch>
      <StyledSwitchLabel isDisabled={props.isDisabled}>
        {props.children}
        <StyledSwitchInput {...inputProps} {...focusProps} ref={ref} />
      </StyledSwitchLabel>
    </StyledSwitch>
  );
}

Switch.displayName = "Switch";

Switch.defaultProps = {};

export { Switch };
