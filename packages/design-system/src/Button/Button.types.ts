import React from "react";
import { AriaButtonProps } from "@react-types/button";
import { PressEvent } from "@react-types/shared";

// Button types
export type Kind = "primary" | "secondary" | "tertiary" | "error";

// Button sizes
export type Size = "sm" | "md" | "lg";

// Button props
export type ButtonProps = {
  /** The HTML element to render the button as. */
  as?: "button" | "a";
  /** The class name to apply to the button component. */
  className?: string;
  /** The content to display within the button. */
  children?: React.ReactNode | string;
  /** Whether the button should display a loading spinner. */
  isLoading?: boolean;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The visual style to apply to the button. */
  kind?: Kind;
  /** The size of the button. */
  size?: Size;
  /** The icon to display before the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  startIcon?: React.ReactNode | "string";
  /** The icon to display after the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  endIcon?: React.ReactNode | "string";
  /** The height of the button. Accepts all css units. */
  UNSAFE_height?: string;
  /** The width of the button. Accepts all css units. */
  UNSAFE_width?: string;
  /** The href attribute to apply to the button if it renders as an anchor. */
  href?: string;
  onPress?: (e: PressEvent) => void;
  onPressStart?: (e: PressEvent) => void;
  onPressEnd?: (e: PressEvent) => void;
  onPressChange?: (isPressed: boolean) => void;
  onPressUp?: (e: PressEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  AriaButtonProps;
