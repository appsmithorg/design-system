import React, { useState, useEffect, forwardRef } from "react";
import clsx from "classnames";

import { NumberInputProps } from "./NumberInput.types";
import { StyledNumberInput } from "./NumberInput.styles";
import { NumberInputClassName } from "./NumberInput.constants";
import { useDOMRef } from "Hooks/useDomRef";

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const inputRef = useDOMRef(ref);
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
      if (props.value !== undefined) {
        const newValue = handlePrefixAndSuffix(props.value);
        setValue(newValue);
      }
    }, [props.value]);

    const handlePrefixAndSuffix = (value: string) => {
      let newValue = value;
      if (newValue === "" || newValue === undefined) return "";
      // defensive check to make sure the value is a string
      newValue = newValue.toString();
      if (prefix && !newValue.startsWith(prefix)) {
        newValue = prefix + newValue;
      }
      if (suffix && !newValue.endsWith(suffix)) {
        newValue = newValue + suffix;
      }
      return newValue;
    };

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
        newValueString = handlePrefixAndSuffix(newValueString);
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
  },
);

NumberInput.displayName = "NumberInput";

NumberInput.defaultProps = {};

export { NumberInput };
