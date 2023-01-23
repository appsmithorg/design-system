import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { LinkProps } from "./Link.types";
import { StyledLink } from "./Link.styles";

import { useLink } from "@react-aria/link";
import { Link as RouterLink } from "react-router-dom";

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
 * - styles
 * @param props
 * @constructor
 */

function Link(props: LinkProps) {
  let ref = React.useRef();
  let { linkProps } = useLink(props, ref);

  return (
    <RouterLink
      {...linkProps}
      innerRef={ref}
      to={props.to}
      target={props.target}
    >
      {props.children}
    </a>
  );
}

//
// function Link({ children, YOUR_PROPS, ...rest }: LinkProps) {
//   return <StyledLink {...rest}>{children}</StyledLink>;
// }

Link.displayName = "Link";

Link.defaultProps = {
  target: "_blank",
};

export { Link };
