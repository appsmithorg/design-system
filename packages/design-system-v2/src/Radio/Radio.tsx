import React from "react";

import { RadioProps } from "./Radio.types";
import { RadioComponent } from "./Radio.styles";

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref): JSX.Element => {
    const { checked, disabled, label, name, value, ...rest } = props;
    return (
      <RadioComponent disabled={disabled}>
        <input
          checked={checked}
          disabled={disabled}
          name={name}
          ref={ref}
          type="radio"
          value={value}
          {...rest}
        />
        <label>{label}</label>
      </RadioComponent>
    );
  },
);

Radio.displayName = "Radio";

export { Radio };
