import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";

import { InputProps } from "./Input.types";
import { StyledInput } from "./Input.styles";

function Input(props: InputProps) {
  const ref = React.useRef();
  const { descriptionProps, errorMessageProps, inputProps } = useTextField(
    props,
    ref,
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
      <input {...inputProps} ref={ref} />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

Input.displayName = "Input";

Input.defaultProps = {};

export { Input };
