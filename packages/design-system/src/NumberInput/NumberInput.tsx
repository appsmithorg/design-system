import React, { useState, useRef, useEffect } from "react";
import clsx from "classnames";

import { NumberInputProps } from "./NumberInput.types";
import { StyledNumberInput } from "./NumberInput.styles";
import { NumberInputClassName } from "./NumberInput.constants";

function NumberInput(props: NumberInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    className,
    description,
    errorMessage,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    label,
    labelPosition = "top",
    max,
    min,
    onChange,
    placeholder = "0",
    prefix = "",
    scale = 1,
    suffix = "",
    ...rest
  } = props;
  const initialValue =
    props.value !== undefined ? prefix + (props.value || "") + suffix : "";
  const [value, setValue] = useState<string>(initialValue);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      handleChange(value === "" ? "0" : value, "add");
    } else if (e.key === "ArrowDown") {
      handleChange(value === "" ? "0" : value, "subtract");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("keydown", handleKeyDown);
      return () => {
        inputRef.current?.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  useEffect(() => {
    if (props.value !== undefined)
      setValue(prefix + (props.value || "") + suffix);
  }, [props.value]);

  const handleChange = (_value: string, operation?: "add" | "subtract") => {
    const inputValue = parseFloat(_value.replace(/[^0-9.-]+/g, ""));

    // Check if the input value is a valid number
    if (!isNaN(inputValue)) {
      let newValue = inputValue;
      // Apply operation on the value
      if (operation === "add") {
        newValue += scale;
      } else if (operation === "subtract") {
        newValue -= scale;
      }
      // Check min and max values
      if (typeof min === "number" && newValue < min) {
        newValue = min;
      }
      if (typeof max === "number" && newValue > max) {
        newValue = max;
      }
      // Convert the value back to a string and append prefix and postfix if present
      let newValueString = String(newValue);
      if (prefix && !newValueString.startsWith(prefix)) {
        newValueString = prefix + newValueString;
      }
      if (suffix && !newValueString.endsWith(suffix)) {
        newValueString = newValueString + suffix;
      }
      setValue(newValueString);
      onChange?.(newValueString);
    } else {
      setValue("");
      onChange?.("");
      return;
    }
  };

  return (
    <StyledNumberInput
      className={clsx(NumberInputClassName, className)}
      description={description}
      endIcon="add-line"
      endIconProps={{
        onClick: () =>
          !isDisabled &&
          !isReadOnly &&
          handleChange(value === "" ? "0" : value, "add"),
      }}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      label={label}
      labelPosition={labelPosition}
      onChange={(val) => !isDisabled && !isReadOnly && handleChange(val)}
      placeholder={placeholder}
      ref={inputRef}
      renderAs="input"
      size="md"
      startIcon="subtract-line"
      startIconProps={{
        onClick: () =>
          !isDisabled &&
          !isReadOnly &&
          handleChange(value === "" ? "0" : value, "subtract"),
      }}
      {...rest}
      value={value}
    />
  );
}

NumberInput.displayName = "NumberInput";

NumberInput.defaultProps = {};

export { NumberInput };
