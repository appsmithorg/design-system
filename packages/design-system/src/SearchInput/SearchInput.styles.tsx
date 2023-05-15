import styled, { css } from "styled-components";
import { Input } from "../Input/Input";
import { InputEndIconClassName } from "../Input/Input.constants";

const Sizes = {
  sm: css`
    --input-font-size: 14px;
    --input-padding-x: var(--ads-v2-spaces-3); // padding left and right
    --input-padding-y: var(--ads-v2-spaces-2); // padding top and bottom
    --input-height: 28px;
  `,
  md: css`
    --input-padding-x: var(--ads-v2-spaces-3);
    --input-padding-y: var(--ads-v2-spaces-3);
    --input-font-size: var(--ads-v2-font-size-4);
    --input-height: 36px;
  `,
};

export const StyledSearchInput = styled(Input)<{
  size: "sm" | "md";
}>`
  ${(props) => Sizes[props.size]}

  & .${InputEndIconClassName} {
    cursor: pointer;
  }
`;
