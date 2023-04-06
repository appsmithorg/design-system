import React, { useRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useToggleState } from "@react-stately/toggle";
import { useToggleButton } from "@react-aria/button";
import clsx from "classnames";

import { ToggleButtonProps } from "./ToggleButton.types";
import { StyledToggleButton } from "./ToggleButton.styles";
import { ToggleClassName, ToggleIconClassName } from "./ToggleButton.constants";
import { Icon } from "Icon";

const mergeRefs = (...refs: any) => {
  return (node: any) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        return ref(node);
      }
      ref.current = node;
    }
  };
};

export const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  ToggleButtonProps
>((props, ref) => {
  const { className, icon, size, tabIndex, ...rest } = props;
  const internalRef = useRef(null);
  const state = useToggleState(rest);
  const { buttonProps } = useToggleButton(rest, state, internalRef);
  const { focusProps, isFocusVisible } = useFocusRing({});

  return (
    <StyledToggleButton
      className={clsx(ToggleClassName, className)}
      isFocusVisible={isFocusVisible}
      isSelected={state.isSelected}
      ref={mergeRefs(internalRef, ref)}
      size={size}
      {...buttonProps}
      {...focusProps}
      tabIndex={tabIndex}
    >
      <Icon className={ToggleIconClassName} name={icon} size={size} />
    </StyledToggleButton>
  );
});

ToggleButton.displayName = "ToggleButton";

ToggleButton.defaultProps = {
  size: "md",
};
