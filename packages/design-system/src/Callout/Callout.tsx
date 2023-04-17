import React from "react";

import { CalloutProps } from "./Callout.types";
import {
  StyledCallout,
  StyledChildrenContainer,
  StyledCloseButton,
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
  onClose,
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
            {links.map((link) => {
              const { endIcon, onClick, startIcon, to, ...restOfLink } = link;
              return (
                <Link
                  endIcon={endIcon}
                  key={to || "onClickKey"}
                  kind="secondary"
                  onClick={onClick}
                  startIcon={startIcon}
                  to={to}
                  {...restOfLink}
                >
                  {link.children}
                </Link>
              );
            })}
          </StyledLinks>
        )}
      </StyledChildrenContainer>
      {isClosable && (
        <StyledCloseButton
          aria-label="Close"
          isIconButton
          kind="tertiary"
          onClick={() => {
            setClosed(true);
            onClose && onClose();
          }}
          size="sm"
          startIcon="close-line"
        />
      )}
    </StyledCallout>
  );
}

Callout.displayName = "Callout";

export { Callout };
