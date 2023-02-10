import styled from "styled-components";

export const IconContainer = styled.span<{
  size: string;
  color?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => (size ? size : "inherit")};
  color: ${({ color }) => (color ? color : "inherit")};
`;
