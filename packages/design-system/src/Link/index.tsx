import React, { ReactFragment } from "react";
import styled from "styled-components";
import { CommonComponentProps } from "Types/common";

export interface LinkProps extends CommonComponentProps {
  children: string | ReactFragment;
  to: string;
  isPrimary?: boolean;
  // allow any number of other arguments (classes, styles, etc)
  [x: string]: any;
}

const StyledLink = styled.a<{ isPrimary?: boolean }>`
  // explicitly set color instead of relying on css current color property
  --current-color: ${(props) =>
    props.isPrimary
      ? "var(--ads-color-primary)"
      : "var(--ads-text-color-default)"};

  color: var(--current-color);

  &:hover {
    color: var(--current-color);
    text-decoration: none;
    border-bottom: 1px solid var(--current-color);
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
