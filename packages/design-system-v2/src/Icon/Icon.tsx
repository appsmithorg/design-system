import React from "react";

import { IconContainer } from "./Icon.styles";
import { IconProps } from "./Icon.types";
import { IconProvider } from "./Icon.provider";

function Icon(props: IconProps) {
  const { children, className, color, name, size } = props;

  if (!name && !children) return null;

  return (
    <IconContainer className={className} color={color} size={size}>
      {name ? (
        <IconProvider color={color} iconName={name} size={size} />
      ) : (
        children
      )}
    </IconContainer>
  );
}

Icon.defaultProps = {
  size: "0.8rem",
};

export { Icon };
