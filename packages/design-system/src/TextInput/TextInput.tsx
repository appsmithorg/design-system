import React, { forwardRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";
import clsx from "classnames";

import { TextInputProps } from "./TextInput.types";
import {
  Label,
  MainContainer,
  StyledInput,
  TextInputSection,
  TextInputContainer,
} from "./TextInput.styles";
import { useDOMRef } from "Hooks/useDomRef";
import { Icon } from "Icon";
import { Text } from "Text";
import {
  TextInputEndIconClassName,
  TextInputIconClassName,
  TextInputStartIconClassName,
} from "./TextInput.constants";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref): JSX.Element => {
    const {
      as = "input",
      description,
      endIcon,
      errorMessage,
      isDisabled = false,
      isReadOnly = false,
      isRequired = false,
      label,
      labelPosition = "top",
      size = "md",
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
                  size={size}
                />
              ) : (
                <Icon
                  className={clsx(
                    TextInputIconClassName,
                    TextInputStartIconClassName,
                  )}
                  size={size}
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
                  size={size}
                />
              ) : (
                <Icon
                  className={clsx(
                    TextInputIconClassName,
                    TextInputEndIconClassName,
                  )}
                  size={size}
                >
                  {endIcon}
                </Icon>
              )
            ) : null}
          </TextInputContainer>
          {description && (
            // TODO: Replace with text component
            <Text
              {...descriptionProps}
              color="var(--ads-v2-color-fg)"
              kind="body-s"
              style={
                isDisabled ? { opacity: "var(--ads-v2-opacity-disabled)" } : {}
              }
            >
              {description}
            </Text>
          )}
          {errorMessage && (
            // TODO: Replace with text component
            <Text
              {...errorMessageProps}
              color="var(--ads-v2-color-fg-error)"
              kind="body-s"
            >
              {errorMessage}
            </Text>
          )}
        </TextInputSection>
      </MainContainer>
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
