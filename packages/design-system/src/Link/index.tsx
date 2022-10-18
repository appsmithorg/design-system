import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import Text, { TextProps, TextType } from "Text";
import { CommonComponentProps } from "Types/common";

export interface LinkProps {
  children: string;
  to: string;
  isPrimary?: boolean;
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
    outline: 1px solid
      ${(props) =>
        props.isPrimary
          ? "var(--ads-color-primary-hover)"
          : "var(--ads-color-gray-4)"};
    text-decoration: underline;
  }
`;

const Link = ({ children, isPrimary, to }: LinkProps) => {
  return (
    <StyledLink href={to} isPrimary={isPrimary}>
      {children}
    </StyledLink>
  );
};

export default Link;
