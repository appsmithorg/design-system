import styled from "styled-components";
import { Input } from "./Input";
import { InputEndIconClassName } from "./Input.constants";

export const StyledSearchInput = styled(Input)`
  --input-font-size: 14px;
  --input-padding-x: var(--ads-v2-spaces-3); // padding left and right
  --input-padding-y: var(--ads-v2-spaces-2); // padding top and bottom
  --input-height: 28px;

  & .${InputEndIconClassName} {
    cursor: pointer;
  }
`;
