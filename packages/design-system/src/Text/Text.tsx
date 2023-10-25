import React from "react";
import clsx from "classnames";
import { TextProps } from "./Text.types";
import { StyledText } from "./Text.styles";
import { TextClassName } from "./Text.constants";

/*
TODO:
 - add segment header style to list of styles
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
