import React, { ReactNode } from "react";
import { Sizes } from "../__config__/types";
import { AriaToggleButtonProps } from "@react-types/button";

export type Size = Extract<Sizes, "sm" | "md">;

// Toggle props
export type ToggleProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: ReactNode;
  /** the size of the toggle button */
  size: Size;

  isDisabled: boolean;
  isSelected: boolean;
} & AriaToggleButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
