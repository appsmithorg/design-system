import { IconProps } from "Icon/Icon.types";
import React from "react";
import { Sizes } from "__config__/types";

export type SpinnerSize = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

// Spinner props
export type SpinnerProps = {
  /** Spinner size */
  size?: SpinnerSize;
  /** Spinner icon props */
  iconProps?: IconProps;
} & React.HTMLAttributes<HTMLSpanElement>;
