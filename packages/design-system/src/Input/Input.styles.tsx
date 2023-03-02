import styled, { css } from "styled-components";
import {
  InputEndIconClassName,
  InputIconClassName,
  InputStartIconClassName,
} from "./Input.constants";
import { InputSizes } from "./Input.types";

const Variables = css`
  --input-color-border: var(--ads-v2-color-border);
  --input-padding-x: var(--ads-v2-spaces-3); // padding left and right
  --input-padding-y: var(--ads-v2-spaces-2); // padding top and bottom
  --input-color: var(--ads-v2-color-fg);
  --input-font-size: 14px;
  --input-height: 32px;
`;

const Sizes = {
  md: css`
    --input-padding-x: var(--ads-v2-spaces-3);
    --input-padding-y: var(--ads-v2-spaces-2);
    --input-font-size: 12px;
    --input-height: 32px;
  `,
  lg: css`
    --input-padding-x: var(--ads-v2-spaces-3);
    --input-padding-y: var(--ads-v2-spaces-3);
    --input-font-size: 14px;
    --input-height: 40px;
  `,
};

export const MainContainer = styled.div<{
  labelPosition?: "top" | "left";
  size?: InputSizes;
}>`
  ${Variables}

  display: flex;
  flex-direction: ${({ labelPosition }) =>
    labelPosition === "left" ? "row" : "column"};
  gap: ${({ labelPosition }) =>
    labelPosition === "left"
      ? "var(--ads-v2-spaces-4)"
      : "var(--ads-v2-spaces-2)"};
  align-items: baseline;
  font-family: var(--ads-v2-font-family);
  font-size: var(--input-font-size);

  /* Size style */
  ${({ size }) => size && Sizes[size]}
`;

export const Label = styled.label`
  color: var(--ads-v2-color-fg);

  & > span {
    color: var(--ads-v2-color-fg-error);
    margin-left: var(--ads-v2-spaces-1);
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ads-v2-spaces-2);
`;

export const InputContainer = styled.div<{
  disabled?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--input-color);

  & .${InputIconClassName} {
    position: absolute;
    padding: var(--input-padding-y) var(--input-padding-x);

    & > svg {
      color: inherit;
    }
  }

  & .${InputIconClassName}.${InputStartIconClassName} {
    left: 0;
  }

  & .${InputIconClassName}.${InputEndIconClassName} {
    right: 0;
  }

  ${({ disabled }) =>
    disabled &&
    `opacity: var(--ads-v2-opacity-disabled);
    cursor: not-allowed;`};
`;

export const StyledInput = styled.input<{
  isFocusVisible?: boolean;
  UNSAFE_width?: string;
  UNSAFE_height?: string;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  renderer?: "input" | "textarea";
  hasError?: boolean;
}>`
  background-color: var(--ads-v2-color-background);
  border: 1px solid var(--input-color-border);
  border-radius: var(--ads-v2-border-radius);
  font-family: var(--ads-v2-font-family);
  font-size: var(--input-font-size);
  color: var(--input-color);
  padding: var(--input-padding-y) var(--input-padding-x);
  box-sizing: border-box;
  width: ${({ UNSAFE_width }) => UNSAFE_width || "300px"};
  height: ${({ UNSAFE_height }) => UNSAFE_height || "var(--input-height)"};
  resize: none;

  /* adjust padding start according to icon present or not */
  ${({ hasStartIcon, renderer }) =>
    hasStartIcon &&
    renderer === "input" &&
    css`
      padding-left: calc(
        var(--input-padding-x) + var(--ads-v2-spaces-5) + var(--input-padding-x)
      );
    `};

  /* adjust padding end according to icon present or not */
  ${({ hasEndIcon, renderer }) =>
    hasEndIcon &&
    renderer === "input" &&
    css`
      padding-right: calc(
        var(--input-padding-x) + var(--ads-v2-spaces-5) + var(--input-padding-x)
      );
    `};

  &:focus:enabled {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }

  &:hover:enabled {
    --input-color-border: var(--ads-v2-color-border-emphasis);
  }

  &:active:enabled,
  &:focus:enabled {
    --input-color-border: var(--ads-v2-color-border-emphasis-plus);
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      --input-color-border: var(--ads-v2-color-border-error);
    `}
`;
