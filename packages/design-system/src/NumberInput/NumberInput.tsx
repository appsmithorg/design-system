import React, { useState, useRef, useEffect } from "react";

import { NumberInputProps } from "./NumberInput.types";
import { StyledNumberInput } from "./NumberInput.styles";
import { NumberInputClassName } from "./NumberInput.constants";

function NumberInput(props: NumberInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { onChange, prefix = "", scale = 1, suffix = "" } = props;
  const initialValue = prefix + (props.value || "0") + suffix;
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
    setValue(prefix + (props.value || "0") + suffix);
  }, [props.value]);

  const handleChange = (operation?: "add" | "subtract", _value?: string) => {
    const _valueToUse = _value || value;
    const val = _valueToUse.replace(prefix, "").replace(suffix, "");
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
    setValue(prefix + newVal.toString() + suffix);
    onChange?.(newVal);
  };

  return (
    <StyledNumberInput
      className={NumberInputClassName}
      endIcon="add-line"
      endIconProps={{
        onClick: () => handleChange("add"),
      }}
      onChange={(val) => handleChange(undefined, val)}
      placeholder="Search"
      ref={inputRef}
      renderAs="input"
      size="md"
      startIcon="subtract-line"
      startIconProps={{
        onClick: () => handleChange("subtract"),
      }}
      value={value}
    />
  );
}

NumberInput.displayName = "NumberInput";

NumberInput.defaultProps = {};

export { NumberInput };
