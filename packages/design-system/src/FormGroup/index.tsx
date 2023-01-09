import styled from "styled-components";
import { PropsWithChildren, ReactNode } from "react";
import { FormGroup, Classes } from "@blueprintjs/core";
import { getTypographyByKey } from "Constants/typography";

type FormGroupProps = PropsWithChildren<{
  children?: ReactNode;
  fill?: boolean;
}>;

const StyledFormGroup = styled(FormGroup)<FormGroupProps>`
  & {
    width: ${(props) => (props.fill ? "100%" : "auto")};
    &.${Classes.FORM_GROUP} {
      margin: 0 0 var(--ads-spaces-11);
    }
    &.${Classes.FORM_GROUP} .${Classes.FORM_HELPER_TEXT} {
      font-size: var(--ads-font-size-3);
    }
    &.${Classes.FORM_GROUP} .${Classes.LABEL} {
      ${getTypographyByKey("h5")}
      color: var(--ads-form-group-label-text-color);
    }
  }
`;

export default StyledFormGroup;
