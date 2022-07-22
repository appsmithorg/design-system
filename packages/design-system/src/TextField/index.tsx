/**
 * Story not added to the storybook since redux dependency.
 */
import React from "react";
import {
  Field,
  WrappedFieldMetaProps,
  WrappedFieldInputProps,
} from "redux-form";
import InputComponent, { InputType } from "TextInput";
import FormFieldError from "FieldError";

const renderComponent = (
  componentProps: FormTextFieldProps & {
    meta: Partial<WrappedFieldMetaProps>;
    input: Partial<WrappedFieldInputProps>;
  },
) => {
  const showError = componentProps.meta.touched && !componentProps.meta.active;

  return (
    <>
      <InputComponent {...componentProps} {...componentProps.input} fill />
      {!componentProps.hideErrorMessage &&
        showError &&
        componentProps.meta.error && (
          <FormFieldError error={showError && componentProps.meta.error} />
        )}
    </>
  );
};

export type FormTextFieldProps = {
  name: string;
  placeholder: string;
  type?: InputType;
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  hideErrorMessage?: boolean;
};

function FormTextField(props: FormTextFieldProps) {
  return <Field component={renderComponent} {...props} asyncControl />;
}

export default FormTextField;
