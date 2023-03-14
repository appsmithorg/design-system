import React, { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useToggleState } from "@react-stately/toggle";
import { useToggleButton } from "@react-aria/button";
import clsx from "classnames";

import { ToggleButtonProps } from "./ToggleButton.types";
import { StyledToggleButton } from "./ToggleButton.styles";
import { ToggleClassName, ToggleIconClassName } from "./ToggleButton.constants";
import { Icon } from "Icon";

function ToggleButton(props: ToggleButtonProps) {
  const { className, icon, size, ...rest } = props;
  const ref = useRef(null);
  const state = useToggleState(rest);
  const { buttonProps } = useToggleButton(rest, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <StyledToggleButton
      className={clsx(ToggleClassName, className)}
      isFocusVisible={isFocusVisible}
      isSelected={state.isSelected}
      ref={ref}
      size={size}
      {...buttonProps}
      {...focusProps}
    >
      <Icon className={ToggleIconClassName} name={icon} size={size} />
    </StyledToggleButton>
  );
}

ToggleButton.displayName = "ToggleButton";

ToggleButton.defaultProps = {
  size: "md",
};

export { ToggleButton };
