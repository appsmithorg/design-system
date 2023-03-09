import { Sizes } from "../__config__/types";
import { AriaToggleButtonProps } from "@react-types/button";

export type Size = Extract<Sizes, "sm" | "md">;

// Toggle props
export type ToggleProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the icon to be rendered */
  icon: string;
  /** the size of the toggle button */
  size: Size;
  /** Whether the toggle is disabled or not. */
  isDisabled: boolean;
  /** Whether the toggle is selected or not. */
  isSelected: boolean;
} & AriaToggleButtonProps;
