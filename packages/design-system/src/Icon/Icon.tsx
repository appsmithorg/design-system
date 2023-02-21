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
  const { className, color, icon, size = "sm", ...rest } = props;

  if (!icon) return null;

  return (
    <IconContainer
      className={className}
      color={color}
      size={iconSizes[size]}
      {...rest}
    >
      {typeof icon === "string" ? (
        <IconProvider color={color} iconName={icon} size={iconSizes[size]} />
      ) : (
        icon
      )}
    </IconContainer>
  );
}

Icon.displayName = "Icon";

export { Icon };
