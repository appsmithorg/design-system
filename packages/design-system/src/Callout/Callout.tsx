import React from "react";

import { CalloutProps } from "./Callout.types";
import {
  StyledCallout,
  StyledChildrenContainer,
  StyledCloseIcon,
  StyledIconContainer,
  StyledLinks,
  StyledChildren,
} from "./Callout.styles";
import { getIconByKind } from "../Icon/getIconByKind";
import { Link } from "../Link";
import { CalloutClassName } from "./Callout.constants";

/*
 * TODO:
 *  - What will keyboard navigation for this look like?
 */
function Callout({
  children,
  isClosable,
  kind = "info",
  links,
  ...rest
}: CalloutProps) {
  const [isClosed, setClosed] = React.useState(false);

  return (
    <StyledCallout
      className={CalloutClassName}
      isClosed={isClosed}
      kind={kind}
      {...rest}
    >
      <StyledIconContainer>{kind && getIconByKind(kind)}</StyledIconContainer>
      <StyledChildrenContainer>
        <StyledChildren kind="body-m">{children}</StyledChildren>
        {links && (
          <StyledLinks>
            {links.map((link) => (
              <Link
                endIcon={link.endIcon}
                key={link.to}
                kind="secondary"
                startIcon={link.startIcon}
                to={link.to}
              >
                {link.children}
              </Link>
            ))}
          </StyledLinks>
        )}
      </StyledChildrenContainer>
      {isClosable && (
        <StyledCloseIcon
          aria-label="Close"
          isIconButton
          kind="tertiary"
          onPress={() => setClosed(true)}
          size="sm"
          startIcon="close-line"
        />
      )}
    </StyledCallout>
  );
}

Callout.displayName = "Callout";

export { Callout };
