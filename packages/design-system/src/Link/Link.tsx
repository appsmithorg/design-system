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

  const isExternal = function (url: string | undefined) {
    return url
      ? (url.indexOf(":") > -1 || url.indexOf("//") > -1) &&
          checkDomain(location.href) !== checkDomain(url)
      : false;
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

  // useList will always return a mock function as a constructor in the onClick on rest (in storybook at least).
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return rest.onClick && !rest.onClick._isMockFunction ? (
    // if an onClick prop exists
    <StyledRouterLink
      {...(linkProps as LinkProps)}
      className={clsx(LinkClassName, className)}
      innerRef={ref}
      kind={rest.kind}
      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        rest.onClick?.(e);
      }}
      target={"_self"}
      to=""
    >
      {children}
    </StyledRouterLink>
  ) : isExternal(rest.to) ? (
    // if the url passed is external
    <StyledAnchor
      className={clsx(LinkClassName, className)}
      href={rest.to}
      kind={rest.kind}
      target={rest.target}
    >
      {children}
    </StyledAnchor>
  ) : (
    // if the url passed is internal
    <StyledRouterLink
      {...(linkProps as LinkProps)}
      className={clsx(LinkClassName, className)}
      innerRef={ref}
      kind={rest.kind}
      target={rest.target || "_self"}
      to={rest.to || ""}
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
