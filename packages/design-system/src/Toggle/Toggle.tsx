import React, { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";

import { ToggleProps } from "./Toggle.types";
import { StyledToggle } from "./Toggle.styles";
import { useToggleState } from "@react-stately/toggle";
import { useToggleButton } from "@react-aria/button";

function Toggle(props: ToggleProps) {
  const ref = useRef(null);
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <StyledToggle
      isFocusVisible={isFocusVisible}
      isPressed={isPressed}
      isSelected={state.isSelected}
      ref={ref}
      {...buttonProps}
      {...focusProps}
    >
      {props.children}
    </StyledToggle>
  );
}

Toggle.displayName = "Toggle";

Toggle.defaultProps = {
  size: "md",
};

export { Toggle };
