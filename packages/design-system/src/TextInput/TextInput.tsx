import React, { forwardRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";

import { TextInputProps } from "./TextInput.types";
import {
  Description,
  ErrorMessage,
  Label,
  MainContainer,
  StyledTextInput,
  TextInputContainer,
} from "./TextInput.styles";
import { useDOMRef } from "Hooks/useDomRef";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref): JSX.Element => {
    const { description, errorMessage, isRequired, label, labelPosition } =
      props;
    const textInputRef = useDOMRef(ref);
    const { descriptionProps, errorMessageProps, inputProps, labelProps } =
      useTextField(props, textInputRef);

    return (
      <MainContainer labelPosition={labelPosition}>
        <Label {...labelProps}>
          {label}
          {isRequired && <span>*</span>}
        </Label>
        <TextInputContainer>
          <StyledTextInput type={"text"} {...inputProps} ref={textInputRef} />
          {description && (
            <Description {...descriptionProps} style={{ fontSize: 12 }}>
              {description}
            </Description>
          )}
          {errorMessage && (
            <ErrorMessage
              {...errorMessageProps}
              style={{ color: "red", fontSize: 12 }}
            >
              {errorMessage}
            </ErrorMessage>
          )}
        </TextInputContainer>
      </MainContainer>
    );
  },
);

TextInput.displayName = "TextInput";

TextInput.defaultProps = {};

export { TextInput };
