import React, { ReactNode } from "react";
import styled from "styled-components";

type BoxProps = {
  space?: string;
  direction?: "horizontal" | "vertical";
  justifyContent?:
    | "space-evenly"
    | "space-around"
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end";
  children: ReactNode;
};

const StyledBox = styled.div<BoxProps>`
  background-color: var(--ads-color-black-0);
  border: 1px solid #f1f5f9;
  display: flex;
  ${(props) =>
    props.direction == "horizontal"
      ? `flex-direction: row;
          padding: ${props.space} 0px;`
      : `flex-direction: column;
          padding: 0px ${props.space};`}
  justify-content: ${(props) => props.justifyContent};
`;

const Box = ({
  direction = "horizontal",
  justifyContent = "space-evenly",
  ...props
}: BoxProps) => {
  return (
    <StyledBox
      direction={direction}
      justifyContent={justifyContent}
      space={props.space}
    >
      {props.children}
    </StyledBox>
  );
};
1;

export default Box;
