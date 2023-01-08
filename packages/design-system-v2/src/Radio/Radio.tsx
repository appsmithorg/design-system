import React, { useState } from "react";

import { RadioProps } from "./Radio.types";
import { RadioComponent } from "./Radio.styles";

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref): JSX.Element => {
    const { checked, disabled, label, name, value, ...rest } = props;
    const [isChecked, setIsChecked] = useState(false);

    return (
      <RadioComponent
        disabled={disabled}
        onClick={() => {
          console.log("onChange");
          setIsChecked(!isChecked);
        }}
      >
        <input
          checked={isChecked}
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
