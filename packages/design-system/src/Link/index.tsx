import React, { ReactFragment } from "react";
import styled from "styled-components";
import { CommonComponentProps } from "Types/common";

export interface LinkProps extends CommonComponentProps {
  children: string | ReactFragment;
  to: string;
  isPrimary?: boolean;
  [x: string]: any;
}

const StyledLink = styled.a<{ isPrimary?: boolean }>`
  --current-color: ${(props) =>
    props.isPrimary
      ? "var(--ads-color-primary)"
      : "var(--ads-text-color-default)"};

  color: var(--current-color);

  &:hover {
    text-decoration: underline;
    color: var(--current-color);
  }

  &:focus {
    text-decoration: underline;
    color: var(--current-color);
    outline: 1px solid var(--current-color);
  }
`;

const Link = ({ children, isPrimary, to, ...rest }: LinkProps) => {
  // TODO: evaluate `to` prop and assign to RouterLink or a based on type?
  return (
    <StyledLink href={to} isPrimary={isPrimary} {...rest}>
      {children}
    </StyledLink>
  );
};

export default Link;
