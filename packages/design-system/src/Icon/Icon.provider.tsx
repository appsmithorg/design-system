import React from "react";

export function IconProvider(props: {
  iconName: string;
  size?: string;
  color?: string;
}) {
  const { color, iconName, size } = props;

  // convert name to pascal case
  const icon = iconName
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
  const Icon = require(`remixicon-react/${icon}Icon`);
  return <Icon color={color} size={size} />;
}
