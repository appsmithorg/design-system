import styled from "styled-components";

export const IconContainer = styled.span<{
  size?: string;
  color?: string;
}>`
  display: inline-block;
  font-size: ${({ size }) => (size ? size : "0.8rem")};
  color: ${({ color }) => (color ? color : "var(--ads-v2-color-fg)")};
`;
