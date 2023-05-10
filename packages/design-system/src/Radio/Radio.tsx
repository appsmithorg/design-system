import React from "react";
import { useRadioGroupState, RadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup } from "@react-aria/radio";
import { useFocusRing } from "@react-aria/focus";
import clsx from "classnames";

import { StyledRadio, StyledRadioGroup } from "./Radio.styles";
import { RadioProps, RadioGroupProps } from "./Radio.types";
import { RadioClassName, RadioGroupClassName } from "./Radio.constants";

const RadioContext = React.createContext({} as RadioGroupState);

export function RadioGroup(props: RadioGroupProps) {
  const { children, className, UNSAFE_gap } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);
  const classnames = clsx(className, RadioGroupClassName);

  return (
    <StyledRadioGroup
      UNSAFE_gap={UNSAFE_gap}
      {...radioGroupProps}
      className={classnames}
    >
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </StyledRadioGroup>
  );
}

export function Radio(props: RadioProps) {
  const { children, isDisabled } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <StyledRadio
      className={RadioClassName}
      disabled={isDisabled}
      isFocusVisible={isFocusVisible}
    >
      {children}
      <input {...inputProps} {...focusProps} ref={ref} />
      <span />
    </StyledRadio>
  );
}
