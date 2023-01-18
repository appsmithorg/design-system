import styled, { css } from "styled-components";
import {
  TextInputEndIconClassName,
  TextInputIconClassName,
  TextInputStartIconClassName,
} from "./TextInput.constants";
import { Size } from "./TextInput.types";

const Variables = css`
  --text-input-color-border: var(--ads-v2-color-border);
  --text-input-color-border-hover: var(--ads-v2-color-border-emphasis);
  --text-input-color-border-active: var(--ads-v2-color-border-emphasis-plus);
  --text-input-border-radius: var(--ads-v2-border-radius);
  --text-input-width-border: 1px;
  --text-input-padding: var(--ads-v2-spaces-4);
  --text-input-color-input: var(--ads-v2-color-fg);
  --text-input-font-size: 14px;
`;

const Sizes = {
  sm: css`
    --text-input-padding: var(--ads-v2-spaces-3);
    --text-input-font-size: 13px;
  `,
  md: css`
    --text-input-padding: var(--ads-v2-spaces-4);
    --text-input-font-size: 14px;
  `,
};

export const MainContainer = styled.div<{
  labelPosition?: "top" | "left";
  size?: Size;
}>`
  ${Variables}

  display: flex;
  flex-direction: ${({ labelPosition }) =>
    labelPosition === "left" ? "row" : "column"};
  gap: ${({ labelPosition }) =>
    labelPosition === "left"
      ? "var(--ads-v2-spaces-4)"
      : "var(--ads-v2-spaces-2)"};
  font-family: var(--ads-v2-font-family);
  align-items: baseline;
  font-size: var(--text-input-font-size);

  & input {
    font-size: var(--text-input-font-size);
  }

  /* Size style */
  ${({ size }) => size && Sizes[size]}
`;

export const TextInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ads-v2-spaces-2);
`;

export const StyledInput = styled.input<{
  isFocusVisible?: boolean;
  width?: string;
  height?: string;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
}>`
  background-color: var(--ads-v2-color-background);
  border: var(--text-input-width-border) solid var(--text-input-color-border);
  border-radius: var(--text-input-border-radius);
  font-family: var(--ads-v2-font-family);
  box-sizing: border-box;
  padding: var(--text-input-padding);
  ${({ hasStartIcon }) =>
    hasStartIcon &&
    css`
      padding-left: calc(
        var(--text-input-padding) + var(--ads-v2-spaces-5) +
          var(--text-input-padding)
      );
    `};
  ${({ hasEndIcon }) =>
    hasEndIcon &&
    css`
      padding-right: calc(
        var(--text-input-padding) + var(--ads-v2-spaces-5) +
          var(--text-input-padding)
      );
    `};
  width: ${({ width }) => width || "300px"};
  ${({ height }) => height && `height: ${height};`}

  &:focus {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }
`;

export const Label = styled.label`
  color: var(--ads-v2-color-fg-muted);

  & > span {
    color: var(--ads-v2-color-fg-error);
    margin-left: var(--ads-v2-spaces-1);
  }
`;

export const Description = styled.div`
  font-size: 13px;
  color: var(--ads-v2-color-fg-muted);
`;

export const ErrorMessage = styled.div`
  color: var(--ads-v2-color-fg-error);
  font-size: 13px;
`;

export const TextInputContainer = styled.div<{
  disabled?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--text-input-color-input);

  & input {
    color: var(--text-input-color-input);
  }

  & .${TextInputIconClassName} {
    position: absolute;
    padding: var(--text-input-padding);

    & > svg {
      width: var(--ads-v2-spaces-5);
      height: var(--ads-v2-spaces-5);
      color: inherit;
    }
  }

  & .${TextInputIconClassName}.${TextInputStartIconClassName} {
    left: 0;
  }

  & .${TextInputIconClassName}.${TextInputEndIconClassName} {
    right: 0;
  }

  ${({ disabled }) => disabled && `opacity: var(--ads-v2-opacity-disabled);`};
`;
