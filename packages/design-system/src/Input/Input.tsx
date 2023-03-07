import React, { forwardRef } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";
import clsx from "classnames";

import { InputProps } from "./Input.types";
import {
  Description,
  Error,
  Label,
  MainContainer,
  StyledInput,
  InputSection,
  InputContainer,
} from "./Input.styles";
import { useDOMRef } from "Hooks/useDomRef";
import { Icon } from "Icon";
import {
  InputClassName,
  InputLabelClassName,
  InputSectionClassName,
  InputSectionInputClassName,
  InputEndIconClassName,
  InputIconClassName,
  InputStartIconClassName,
} from "./Input.constants";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    const {
      as = "input",
      className,
      description,
      endIcon,
      endIconProps,
      errorMessage,
      isDisabled = false,
      isReadOnly = false,
      isRequired = false,
      label,
      labelPosition = "top",
      onChange,
      size = "sm",
      startIcon,
      startIconProps,
      UNSAFE_height,
      UNSAFE_width,
      value,
    } = props;
    const inputRef = useDOMRef(ref);
    const { descriptionProps, errorMessageProps, inputProps, labelProps } =
      useTextField(props, inputRef);
    const { focusProps, isFocusVisible } = useFocusRing();
    const { className: startIconClassName, ...restOfStartIconProps } =
      startIconProps || {};
    const { className: endIconClassName, ...restOfEndIconProps } =
      endIconProps || {};

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <MainContainer
        className={clsx(InputClassName, className)}
        component={as}
        labelPosition={labelPosition}
        testSize={size}
      >
        {/* TODO: replace this with text component */}
        {/* Issue: adding kind while implementing
        text is throwing typescript error. 
        https://stackoverflow.com/questions/68073958/cant-use-href-with-iconbuttonprops*/}
        {label && (
          <Label className={InputLabelClassName} {...labelProps}>
            {label}
            {isRequired && <span>*</span>}
          </Label>
        )}
        <InputSection className={InputSectionClassName}>
          <InputContainer disabled={isDisabled || isReadOnly}>
            {/* Start Icon Section */}
            {startIcon && as === "input" ? (
              typeof startIcon === "string" ? (
                <Icon
                  className={clsx(
                    InputIconClassName,
                    InputStartIconClassName,
                    startIconClassName,
                  )}
                  name={startIcon}
                  size={size}
                  {...restOfStartIconProps}
                />
              ) : (
                <Icon
                  className={clsx(
                    InputIconClassName,
                    InputStartIconClassName,
                    startIconClassName,
                  )}
                  size={size}
                  {...restOfStartIconProps}
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
              className={InputSectionInputClassName}
              hasEndIcon={!!endIcon}
              hasError={!!errorMessage}
              hasStartIcon={!!startIcon}
              inputSize={size}
              isFocusVisible={isFocusVisible}
              onChange={handleOnChange}
              ref={inputRef}
              renderer={as}
              value={value}
            />
            {/* End Icon Section */}
            {endIcon && as === "input" ? (
              typeof endIcon === "string" ? (
                <Icon
                  className={clsx(
                    InputIconClassName,
                    InputEndIconClassName,
                    endIconClassName,
                  )}
                  name={endIcon}
                  size={size}
                  {...restOfEndIconProps}
                />
              ) : (
                <Icon
                  className={clsx(
                    InputIconClassName,
                    InputEndIconClassName,
                    endIconClassName,
                  )}
                  size={size}
                  {...restOfEndIconProps}
                >
                  {endIcon}
                </Icon>
              )
            ) : null}
          </InputContainer>
          {description && (
            <Description
              {...descriptionProps}
              color="var(--ads-v2-color-fg-muted)"
              kind="body-s"
              style={
                isDisabled ? { opacity: "var(--ads-v2-opacity-disabled)" } : {}
              }
            >
              {description}
            </Description>
          )}
          {errorMessage && (
            <Error
              {...errorMessageProps}
              color="var(--ads-v2-color-fg-error)"
              kind="body-s"
            >
              {errorMessage}
            </Error>
          )}
        </InputSection>
      </MainContainer>
    );
  },
);

Input.displayName = "Input";

export { Input };
