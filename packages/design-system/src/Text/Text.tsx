import React from "react";
import clsx from "classnames";
import { TextProps } from "./Text.types";
import { StyledText } from "./Text.styles";
import { TextClassName } from "./Text.constants";

/*
TODO:
 - ~create regular text component (copy styles)~
 - create editable text with prop `editable`
 - create highlight text with prop `highlight`
 - add segment header style to list of styles
 - create uneditable field with prop `uneditable`
 */

function Text({
  children,
  className,
  color,
  kind,
  renderAs,
  ...rest
}: TextProps) {
  return (
    <StyledText
      as={renderAs}
      className={clsx(TextClassName, className)}
      color={color}
      kind={kind}
      {...rest}
    >
      {children}
    </StyledText>
  );
}

Text.displayName = "Text";

Text.defaultProps = {
  renderAs: "span",
  kind: "span",
};

export { Text };
