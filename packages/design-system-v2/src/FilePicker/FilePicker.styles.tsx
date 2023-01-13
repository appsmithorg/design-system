import styled, { css } from "styled-components";
import { YOUR_PROP_TYPE_1 } from "./FilePicker.types";

const Variables = css`
  // Variables that are controlled, changed, or toggled entirely within this component
  // are defined here and used in the component's styles.
`;

// Variant style definitions
const YOUR_VARIANTS = css`
  // Styles for the variants defined in your type
`;

export const StyledFilePicker = styled.span<{
  // Props that affect styles are passed through here.
  YOUR_PROP: YOUR_PROP_TYPE_1;
}>`
  ${Variables}

  /* Variant styles */
  ${({ YOUR_PROP }) => YOUR_PROP && YOUR_VARIANTS[YOUR_PROP]} /* Base style */

  /* Additional styles and classes */
`;
