import React from "react";

import { IconContainer } from "./Icon.styles";
import { IconProps, IconSizes } from "./Icon.types";
import { IconProvider } from "./Icon.provider";

const iconSizes: Record<IconSizes, string> = {
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  xxl: "32px",
};

function Icon(props: IconProps) {
  const { children, className, color, name, size, ...rest } = props;

  if (!name && !children) return null;

  return (
    <IconContainer
      className={className}
      color={color}
      size={iconSizes[size]}
      {...rest}
    >
      {name ? (
        <IconProvider color={color} iconName={name} size={iconSizes[size]} />
      ) : (
        children
      )}
    </IconContainer>
  );
}

Icon.displayName = "Icon";

Icon.defaultProps = {
  size: "md",
};

export { Icon };
