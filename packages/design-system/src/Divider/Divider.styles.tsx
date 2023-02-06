import styled, { css } from "styled-components";
import { DividerProps } from "./Divider.types";

const Variables = css`
  --divider-thickness: 1px;
  --divider-length: 100%;
`;

export const StyledDivider = styled.span<{
  orientation: "horizontal" | "vertical";
}>`
  ${Variables};

  background-color: var(--ads-v2-color-border);
  width: ${(props) =>
    props.orientation === "horizontal"
      ? "var(--divider-length)"
      : "var(--divider-thickness)"};
  height: ${(props) =>
    props.orientation === "horizontal"
      ? "var(--divider-thickness)"
      : "var(--divider-length)"};
  display: inline-block;
`;
