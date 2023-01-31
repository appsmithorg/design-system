import React, { forwardRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";
import clsx from "classnames";

import { TextInputProps } from "./TextInput.types";
import {
  Description,
  ErrorMessage,
  Label,
  MainContainer,
  StyledInput,
  TextInputSection,
  TextInputContainer,
} from "./TextInput.styles";
import { useDOMRef } from "Hooks/useDomRef";
import { Icon } from "Icon";
import {
  TextInputEndIconClassName,
  TextInputIconClassName,
  TextInputStartIconClassName,
} from "./TextInput.constants";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref): JSX.Element => {
    const {
      as,
      description,
      endIcon,
      errorMessage,
      isDisabled,
      isReadOnly,
      isRequired,
      label,
      labelPosition,
      size,
      startIcon,
      UNSAFE_height,
      UNSAFE_width,
    } = props;
    const textInputRef = useDOMRef(ref);
    const { descriptionProps, errorMessageProps, inputProps, labelProps } =
      useTextField(props, textInputRef);
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <MainContainer labelPosition={labelPosition} size={size}>
        <Label {...labelProps}>
          {label}
          {isRequired && <span>*</span>}
        </Label>
        <TextInputSection>
          <TextInputContainer disabled={isDisabled || isReadOnly}>
            {/* Start Icon Section */}
            {startIcon && as === "input" ? (
              typeof startIcon === "string" ? (
                <Icon
                  className={clsx(
                    TextInputIconClassName,
                    TextInputStartIconClassName,
                  )}
                  name={startIcon}
                />
              ) : (
                <Icon
                  className={clsx(
                    TextInputIconClassName,
                    TextInputStartIconClassName,
                  )}
                >
                  {startIcon}
                </Icon>
              )
            ) : null}
            {/* Input Section */}
            <StyledInput
              as={as}
              type={"text"}
              {...focusProps}
              {...inputProps}
              UNSAFE_height={UNSAFE_height}
              UNSAFE_width={UNSAFE_width}
              hasEndIcon={!!endIcon}
              hasError={!!errorMessage}
              hasStartIcon={!!startIcon}
              isFocusVisible={isFocusVisible}
              ref={textInputRef}
              renderer={as}
            />
            {/* End Icon Section */}
            {endIcon && as === "input" ? (
              typeof endIcon === "string" ? (
                <Icon
                  className={clsx(
                    TextInputIconClassName,
                    TextInputEndIconClassName,
                  )}
                  name={endIcon}
                />
              ) : (
                <Icon
                  className={clsx(
                    TextInputIconClassName,
                    TextInputEndIconClassName,
                  )}
                >
                  {endIcon}
                </Icon>
              )
            ) : null}
          </TextInputContainer>
          {description && (
            <Description {...descriptionProps}>{description}</Description>
          )}
          {errorMessage && (
            <ErrorMessage {...errorMessageProps}>{errorMessage}</ErrorMessage>
          )}
        </TextInputSection>
      </MainContainer>
    );
  },
);

TextInput.displayName = "TextInput";

TextInput.defaultProps = {
  as: "input",
  labelPosition: "top",
  size: "sm",
  isRequired: false,
  isDisabled: false,
};

export { TextInput };
