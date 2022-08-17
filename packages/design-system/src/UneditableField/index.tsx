import React from "react";
import InputComponent, { InputType } from "../TextInput";
import styled from "styled-components";
import { ControlIcons } from "../ControlIcons";

const CopyIcon = ControlIcons.COPY_ICON;

const Label = styled.div`
  font-size: 14px;
  margin: 8px 0;
  color: ${Colors.CHARCOAL};
`;

const InputCopyWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 40rem;
  }

  .copy-icon {
    margin-left: 12px;
  }
`;

const UneditableField = (
  componentProps: FormUneditableTextFieldProps & {
    meta: any;
    // meta: Partial<WrappedFieldMetaProps>;
    input: any;
    // input: Partial<WrappedFieldInputProps>;
  },
) => {
  return (
    <>
      {componentProps.label && <Label>{componentProps.label}</Label>}
      <InputCopyWrapper>
        <InputComponent {...componentProps} {...componentProps.input} fill />
        {componentProps.iscopy === "true" && (
          <CopyIcon
            className={"copy-icon"}
            color={Colors.GREY_7}
            height={16}
            onClick={() =>
              componentProps.handleCopy(componentProps.input.value)
            }
            width={16}
          />
        )}
      </InputCopyWrapper>
    </>
  );
};

export type FormUneditableTextFieldProps = {
  name: string;
  type?: InputType;
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  value?: string;
  helperText?: string;
  iscopy?: string;
  handleCopy: (value: string) => void;
};

// function UneditableField(props: FormTextFieldProps) {
// TODO: The line below should replace all usages of UneditableField in ce
//   return <Field component={UneditableField} {...props} asyncControl />;
// }

export default UneditableField;
