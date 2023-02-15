import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { CalloutProps } from "./Callout.types";
import { StyledCallout, StyledIcon } from "./Callout.styles";
import { getIconByKind } from "../__theme__/getIconByKind";

function Callout({
  children,
  isClosable,
  kind = "info",
  ...rest
}: CalloutProps) {
  const [isClosed, setClosed] = React.useState(false);

  return (
    <StyledCallout isClosed={isClosed} kind={kind} {...rest}>
      {kind && getIconByKind(kind)}
      {children}
      {isClosable && (
        <StyledIcon
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
