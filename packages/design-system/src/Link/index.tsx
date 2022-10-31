import React, { ReactFragment } from "react";
import styled from "styled-components";
import { CommonComponentProps } from "Types/common";
import { TextType } from "../Text";
import { typography } from "Constants/typography";

export interface LinkProps extends CommonComponentProps {
  children: string | ReactFragment;
  to: string;
  isPrimary?: boolean;
  textType?: TextType;
  // allow any number of other arguments (classes, styles, etc)
  [x: string]: any;
}

const StyledLink = styled.a<{ isPrimary?: boolean; textType?: TextType }>`
  // explicitly set color instead of relying on css current color property
  --current-color: ${(props) =>
    props.isPrimary
      ? "var(--ads-color-primary)"
      : "var(--ads-text-color-default)"};

  color: var(--current-color);
  font-size: ${(props) =>
    props.textType ? `${typography[props.textType].fontSize}px` : "inherit"};

  &:hover {
    color: var(--current-color);
    text-decoration: none;
    border-bottom: 1px solid var(--current-color);
    margin-bottom: -1px;
  }

  // hide outline for mouse, touch, or stylus usage
  &:focus {
    outline: none;
  }

  // only show outline when element is accessed via keyboard
  &:focus-visible {
    color: var(--current-color);
    outline: 1px solid var(--current-color);
    border-bottom: 1px solid var(--current-color);
    margin-bottom: -1px;
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
