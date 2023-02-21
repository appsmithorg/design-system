import React from "react";

import { CalloutProps } from "./Callout.types";
import {
  StyledCallout,
  StyledChildrenContainer,
  StyledCloseIcon,
  StyledIconContainer,
  StyledLinks,
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
        {children}
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
                {link.text}
              </Link>
            ))}
          </StyledLinks>
        )}
      </StyledChildrenContainer>
      {isClosable && (
        <StyledCloseIcon
          name="close-line"
          onClick={() => setClosed(true)}
          size="xl"
        />
      )}
    </StyledCallout>
  );
}

Callout.displayName = "Callout";

export { Callout };
