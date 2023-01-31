import React from "react";
import { Kind, TextProps } from "./Text.types";
import { StyledText } from "./Text.styles";

/*
TODO:
 - ~create regular text component (copy styles)~
 - create editable text with prop `editable`
 - create highlight text with prop `highlight`
 - add segment header style to list of styles
 - create uneditable field with prop `uneditable`
 */

function Text({ as, children, kind, ...rest }: TextProps) {
  return (
    <StyledText as={as} kind={kind} {...rest}>
      {children}
    </StyledText>
  );
}

Text.displayName = "Text";

Text.defaultProps = {
  as: "span",
  kind: "span",
};

export { Text };
