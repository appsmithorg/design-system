import React from "react";

import { LinkProps } from "./Link.types";
import { StyledIcon, StyledLink } from "./Link.styles";

import { useLink } from "@react-aria/link";

/**
 *
 * This components is an accessible, styled react router link.
 * This means that it can only route to pages within our application.
 * It does not take an href prop and will do nothing with one.
 *
 * TODO
 * - Add text dependency
 * - get list of available typography link can be from design
 * @param props
 * @constructor
 */

function Link(props: LinkProps) {
  const ref = React.useRef(null);
  const { linkProps } = useLink(props, ref);

  return (
    <StyledLink
      {...linkProps}
      innerRef={ref}
      target={props.target}
      to={props.to}
    >
      {props.children}
      {props.endIcon && <StyledIcon name={props.endIcon} size="1rem" />}
      {props.startIcon && <StyledIcon name={props.startIcon} size="1rem" />}
    </StyledLink>
  );
}

Link.displayName = "Link";

Link.defaultProps = {
  target: "_blank",
};

export { Link };
