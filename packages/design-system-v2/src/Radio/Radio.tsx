import React, { useState } from "react";

import { RadioProps, OptionProps } from "./Radio.types";
import { RadioComponent, RadioGroup, RadioDescription } from "./Radio.styles";

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref): JSX.Element => {
    const {
      defaultValue,
      disabled,
      gap,
      name,
      onChange,
      options,
      showDescription,
      ...otherProps
    } = props;
    const [selected, setSelected] = useState(defaultValue);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSelected(value);
      onChange && onChange(event);
    };

    function RadioButton(option: OptionProps) {
      const {
        description,
        disabled: optionDisabled,
        label,
        value,
        ...inputProps
      } = option;
      const isSelected = selected === value;
      const isDisabled = disabled || optionDisabled;
      const id = `ads-radio-${value}`;

      return (
        <RadioComponent disabled={isDisabled} key={value.toString()}>
          <input
            checked={isSelected}
            disabled={isDisabled}
            id={id}
            name={name}
            onChange={onChangeHandler}
            type="radio"
            value={value}
            {...inputProps}
          />
          <label htmlFor={id}>{label}</label>
          {description &&
            showDescription !== "never" &&
            (showDescription === "always" ||
              (showDescription === "selected" && isSelected)) && (
              <RadioDescription>{description}</RadioDescription>
            )}
        </RadioComponent>
      );
    }

    return (
      <RadioGroup gap={gap} {...otherProps} ref={ref}>
        {options.map((option, index) => (
          <RadioButton key={index.toString()} {...option} />
        ))}
      </RadioGroup>
    );
  },
);

Radio.displayName = "Radio";

export { Radio };
