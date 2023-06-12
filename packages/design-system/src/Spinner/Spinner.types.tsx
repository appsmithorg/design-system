import { IconProps } from "Icon/Icon.types";
import React from "react";
import { Sizes } from "__config__/types";

export type SpinnerSizes = Extract<Sizes, "sm" | "md" | "lg">;

// Spinner props
export type SpinnerProps = {
  /** Spinner size */
  size?: SpinnerSizes;
  /** Spinner icon props */
  iconProps?: Omit<IconProps, "name">;
} & React.HTMLAttributes<HTMLSpanElement>;
