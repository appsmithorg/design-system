import React from "react";
import clsx from "classnames";

import { LinkProps } from "./Link.types";
import { StyledAnchor, StyledIcon, StyledRouterLink } from "./Link.styles";

import { useLink } from "@react-aria/link";
import { Text } from "../Text";
import {
  LinkClassName,
  LinkEndIconClassName,
  LinkStartIconClassName,
  LinkTextClassName,
} from "./Link.constants";

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
  const { className, ...rest } = props;
  const { linkProps } = useLink(rest, ref);

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
      {rest.startIcon && (
        <StyledIcon
          $position="start"
          className={LinkStartIconClassName}
          name={rest.startIcon}
          size="md"
        />
      )}
      <Text className={LinkTextClassName} color="inherit" kind="action-m">
        {rest.children}
      </Text>
      {rest.endIcon && (
        <StyledIcon
          $position="end"
          className={LinkEndIconClassName}
          name={rest.endIcon}
          size="md"
        />
      )}
    </>
  );

  return isExternal(rest.to) ? (
    <StyledAnchor
      className={clsx(LinkClassName, className)}
      href={rest.to}
      kind={rest.kind}
      target={rest.target}
    >
      {children}
    </StyledAnchor>
  ) : (
    <StyledRouterLink
      {...(linkProps as LinkProps)}
      className={clsx(LinkClassName, className)}
      innerRef={ref}
      kind={rest.kind}
      target={rest.target}
      to={rest.to}
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
