import React from "react";
import { useRadioGroupState, RadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup, AriaRadioProps } from "@react-aria/radio";
import { useFocusRing } from "@react-aria/focus";

import { StyledRadio, StyledRadioGroup } from "./Radio.styles";
import { RadioGroupProps } from "./Radio.types";

const RadioContext = React.createContext({} as RadioGroupState);

export function RadioGroup(props: RadioGroupProps) {
  const { children, gap } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <StyledRadioGroup gap={gap} {...radioGroupProps}>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </StyledRadioGroup>
  );
}

export function Radio(props: AriaRadioProps) {
  const { children, isDisabled } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const id = `ads-radio-${props.value}`;

  return (
    <StyledRadio disabled={isDisabled} isFocusVisible={isFocusVisible}>
      <input {...inputProps} {...focusProps} id={id} ref={ref} />
      <label htmlFor={id}>{children}</label>
    </StyledRadio>
  );
}
