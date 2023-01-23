import React from "react";

import { LinkProps } from "./Link.types";
import { StyledLink } from "./Link.styles";

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
 * - add ability to have icon
 * @param props
 * @constructor
 */

function Link(props: LinkProps) {
  let ref = React.useRef(null);
  let { linkProps } = useLink(props, ref);

  return (
    <StyledLink
      {...linkProps}
      innerRef={ref}
      to={props.to}
      target={props.target}
    >
      {props.children}
    </StyledLink>
  );
}

Link.displayName = "Link";

Link.defaultProps = {
  target: "_blank",
};

export { Link };
