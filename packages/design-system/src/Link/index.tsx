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
  color: ${(props) =>
    props.isPrimary
      ? "var(--ads-color-primary)"
      : "var(--ads-text-color-default)"};

  &:hover {
    color: ${(props) =>
      props.isPrimary
        ? "var(--ads-color-primary-hover)"
        : "var(--ads-text-color-default)"};
    text-decoration: underline;
  }

  &:focus {
    color: ${(props) =>
      props.isPrimary
        ? "var(--ads-color-primary-hover)"
        : "var(--ads-text-color-default)"};
    outline: 1px solid
      ${(props) =>
        props.isPrimary
          ? "var(--ads-color-primary-hover)"
          : "var(--ads-color-gray-4)"};
    text-decoration: underline;
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
