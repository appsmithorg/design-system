import React, { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useToggleState } from "@react-stately/toggle";
import { useToggleButton } from "@react-aria/button";
import clsx from "classnames";

import { ToggleProps } from "./Toggle.types";
import { StyledToggle } from "./Toggle.styles";
import { ToggleClassName, ToggleIconClassName } from "./Toggle.constants";
import { Icon } from "Icon";

function Toggle(props: ToggleProps) {
  const { className, icon, size, ...rest } = props;
  const ref = useRef(null);
  const state = useToggleState(rest);
  const { buttonProps } = useToggleButton(rest, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <StyledToggle
      className={clsx(ToggleClassName, className)}
      isFocusVisible={isFocusVisible}
      isSelected={state.isSelected}
      ref={ref}
      size={size}
      {...buttonProps}
      {...focusProps}
    >
      <Icon className={ToggleIconClassName} name={icon} size={size} />
    </StyledToggle>
  );
}

Toggle.displayName = "Toggle";

Toggle.defaultProps = {
  size: "md",
};

export { Toggle };
