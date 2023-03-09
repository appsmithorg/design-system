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
  ${({ size }) => size && `width: ${size};`}
  ${({ size }) => size && `height: ${size};`}

  & svg {
    width: ${({ size }) => (size ? size : "inherit")};
    height: ${({ size }) => (size ? size : "inherit")};
    fill: ${({ color }) => (color ? color : "currentColor")};
    circle {
      fill: ${({ color }) => (color ? color : "currentColor")};
    }
    path {
      fill: ${({ color }) => (color ? color : "currentColor")};
    }
  }
`;
