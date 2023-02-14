import React, { forwardRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";
import clsx from "classnames";

import { InputProps } from "./Input.types";
import {
  Label,
  MainContainer,
  StyledInput,
  InputSection,
  InputContainer,
} from "./Input.styles";
import { useDOMRef } from "Hooks/useDomRef";
import { Icon } from "Icon";
import { Text } from "Text";
import {
  InputEndIconClassName,
  InputIconClassName,
  InputStartIconClassName,
} from "./Input.constants";

const Input = forwardRef<HTMLInputElement, InputProps>(
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
    const inputRef = useDOMRef(ref);
    const { descriptionProps, errorMessageProps, inputProps, labelProps } =
      useTextField(props, inputRef);
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <MainContainer labelPosition={labelPosition} size={size}>
        {/* TODO: replace this with text component */}
        {/* Issue: adding kind while implementing
        text is throwing typescript error. 
        https://stackoverflow.com/questions/68073958/cant-use-href-with-iconbuttonprops*/}
        <Label {...labelProps}>
          {label}
          {isRequired && <span>*</span>}
        </Label>
        <InputSection>
          <InputContainer disabled={isDisabled || isReadOnly}>
            {/* Start Icon Section */}
            {startIcon && as === "input" ? (
              typeof startIcon === "string" ? (
                <Icon
                  className={clsx(InputIconClassName, InputStartIconClassName)}
                  name={startIcon}
                  size={size}
                />
              ) : (
                <Icon
                  className={clsx(InputIconClassName, InputStartIconClassName)}
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
              ref={inputRef}
              renderer={as}
            />
            {/* End Icon Section */}
            {endIcon && as === "input" ? (
              typeof endIcon === "string" ? (
                <Icon
                  className={clsx(InputIconClassName, InputEndIconClassName)}
                  name={endIcon}
                  size={size}
                />
              ) : (
                <Icon
                  className={clsx(InputIconClassName, InputEndIconClassName)}
                  size={size}
                >
                  {endIcon}
                </Icon>
              )
            ) : null}
          </InputContainer>
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
        </InputSection>
      </MainContainer>
    );
  },
);

Input.displayName = "Input";

export { Input };
