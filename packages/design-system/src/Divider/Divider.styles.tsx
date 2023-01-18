import styled, { css } from "styled-components";
import { DividerProps } from "./Divider.types";

const Variables = css`
  // Variables that are controlled, changed, or toggled entirely within this component
  // are defined here and used in the component's styles.
  --divider-thickness: 1px;
  --divider-length: 100%;
`;

export const StyledDivider = styled.span<{
  props: DividerProps;
}>`
  ${Variables}

  /* Base style */
  background-color: var(--ads-v2-color-bg-emphasis);
  width: ${(props) =>
    props.orientation === "horizontal"
      ? "var(--divider-length)"
      : "var(--divider-thickness)"};
  height: ${(props) =>
    props.orientation === "horizontal"
      ? "var(--divider-thickness)"
      : "var(--divider-length)"};
  display: inline-block;

  /* Additional styles and classes */
`;
