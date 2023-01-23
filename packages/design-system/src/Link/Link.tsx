import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { LinkProps } from "./Link.types";
import { StyledLink } from "./Link.styles";

import { useLink } from "@react-aria/link";

/**
 * TODO
 * - Add text
 * - get list of available types link can be from design
 * - use react-router instead of a
 * - add ability to have icon
 * - styles
 * @param props
 * @constructor
 */

function Link(props) {
  let ref = React.useRef();
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
      style={{ color: "var(--blue)" }}
    >
      {props.children}
    </a>
  );
}

Link.displayName = "Link";

Link.defaultProps = {};

export { Link };
