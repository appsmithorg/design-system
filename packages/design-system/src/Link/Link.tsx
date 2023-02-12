import React from "react";

import { LinkProps } from "./Link.types";
import { StyledAnchor, StyledIcon, StyledRouterLink } from "./Link.styles";

import { useLink } from "@react-aria/link";
import { Text } from "../Text";

/**
 *
 * This component is an accessible, styled link.
 * It takes a url and supplies the appropriate tag (anchor vs react router) based
 * on whether the link provided is an external link or not.
 *
 * @param props
 * @constructor
 */

function Link(props: LinkProps) {
  const ref = React.useRef(null);
  const { linkProps } = useLink(props, ref);

  const checkDomain = function (url: string) {
    if (url.indexOf("//") === 0) {
      url = location.protocol + url;
    }
    return url
      .toLowerCase()
      .replace(/([a-z])?:\/\//, "$1")
      .split("/")[0];
  };

  const isExternal = function (url: string) {
    return (
      (url.indexOf(":") > -1 || url.indexOf("//") > -1) &&
      checkDomain(location.href) !== checkDomain(url)
    );
  };

  const children = (
    <>
      {props.startIcon && <StyledIcon name={props.startIcon} size="md" />}
      <Text color="inherit" kind="action-m">
        {props.children}
      </Text>
      {props.endIcon && <StyledIcon name={props.endIcon} size="md" />}
    </>
  );

  return isExternal(props.to) ? (
    <StyledAnchor href={props.to} kind={props.kind} target={props.target}>
      {children}
    </StyledAnchor>
  ) : (
    <StyledRouterLink
      {...(linkProps as LinkProps)}
      innerRef={ref}
      kind={props.kind}
      target={props.target}
      to={props.to}
    >
      {children}
    </StyledRouterLink>
  );
}

Link.displayName = "Link";

Link.defaultProps = {
  target: "_blank",
  kind: "secondary",
};

export { Link };
