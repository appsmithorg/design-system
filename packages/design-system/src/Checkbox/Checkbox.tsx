import React from "react";
import { useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "@react-stately/toggle";
import { useFocusRing } from "@react-aria/focus";
import clsx from "classnames";

import { CheckboxProps } from "./Checkbox.types";
import { StyledCheckbox } from "./Checkbox.styles";
import {
  CheckboxClassName,
  CheckboxClassNameLabel,
} from "./Checkbox.constants";
import { Text } from "Text";

function Checkbox(props: CheckboxProps) {
  const { children, className, isDisabled, isIndeterminate } = props;
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const id = `ads-checkbox-${props.value}`;

  return (
    <StyledCheckbox
      className={clsx(CheckboxClassName, className)}
      isChecked={state.isSelected}
      isDisabled={isDisabled}
      isFocusVisible={isFocusVisible}
      isIndeterminate={isIndeterminate}
    >
      <input {...inputProps} {...focusProps} id={id} ref={ref} />
      <Text className={CheckboxClassNameLabel} htmlFor={id} renderAs="label">
        {children}
      </Text>
    </StyledCheckbox>
  );
}

Checkbox.displayName = "Checkbox";

Checkbox.defaultProps = {
  isIndeterminate: false,
  isDisabled: false,
};

export { Checkbox };
