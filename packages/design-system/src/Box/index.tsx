import React, { ReactNode } from "react";
import styled from "styled-components";

type BoxProps = {
  space?: string;
  direction?: "horizontal" | "vertical";
  children: ReactNode;
};

const StyledBox = styled.div<BoxProps>`
  background-color: var(--ads-color-black-0);
  border: 1px solid #f1f5f9;
  padding: ${(props) => props.space} 0px;
  display: flex;
  justify-content: center;
`;

const Box = (props: BoxProps) => {
  return (
    <StyledBox direction={props.direction} space={props.space}>
      {props.children}
    </StyledBox>
  );
};

export default Box;
