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
      handleChange("add");
    } else if (e.key === "ArrowDown") {
      handleChange("subtract");
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

  const handleChange = (operation?: "add" | "subtract", _value?: string) => {
    const _valueToUse = _value || value;
    const val = _valueToUse.replace(prefix, "").replace(suffix, "");
    if (val === "") {
      setValue("");
      onChange?.("");
      return;
    }
    const num = Number(val);
    if (isNaN(num)) {
      return;
    }
    let newVal = 0;
    if (operation) {
      newVal = operation === "add" ? num + scale : num - scale;
    } else {
      newVal = num;
    }
    if (min && newVal < min) return;
    if (max && newVal > max) return;
    setValue(prefix + newVal.toString() + suffix);
    onChange?.(newVal);
  };

  return (
    <StyledNumberInput
      className={clsx(NumberInputClassName, className)}
      description={description}
      endIcon="add-line"
      endIconProps={{
        onClick: () => !isDisabled && !isReadOnly && handleChange("add"),
      }}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      label={label}
      labelPosition={labelPosition}
      onChange={(val) =>
        !isDisabled && !isReadOnly && handleChange(undefined, val)
      }
      placeholder={placeholder}
      ref={inputRef}
      renderAs="input"
      size="md"
      startIcon="subtract-line"
      startIconProps={{
        onClick: () => !isDisabled && !isReadOnly && handleChange("subtract"),
      }}
      {...rest}
      value={value}
    />
  );
}

NumberInput.displayName = "NumberInput";

NumberInput.defaultProps = {};

export { NumberInput };
