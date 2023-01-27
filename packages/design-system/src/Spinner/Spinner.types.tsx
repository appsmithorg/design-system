import { IconProps } from "Icon/Icon.types";
import React from "react";

// Spinner props
export type SpinnerProps = {
  /** Spinner icon props */
  iconProps?: IconProps;
} & React.HTMLAttributes<HTMLSpanElement>;
