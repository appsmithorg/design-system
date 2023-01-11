import React from "react";
import { useRadioGroupState, RadioGroupState } from "react-stately";
import { useRadio, useRadioGroup, AriaRadioProps } from "@react-aria/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";

import { RadioComponent, StyledRadioGroup } from "./Radio.styles";
import { RadioGroupProps } from "./Radio.types";

const RadioContext = React.createContext({} as RadioGroupState);

export function RadioGroup(props: RadioGroupProps) {
  const { children, direction, gap } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <StyledRadioGroup direction={direction} gap={gap} {...radioGroupProps}>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </StyledRadioGroup>
  );
}

export function Radio(props: AriaRadioProps) {
  const { children, isDisabled } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state, ref);
  const id = `ads-radio-${props.value}`;

  return (
    <RadioComponent disabled={isDisabled}>
      <input {...inputProps} id={id} ref={ref} />
      <label htmlFor={id}>{children}</label>
    </RadioComponent>
  );
}
