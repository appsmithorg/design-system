import { AriaButtonProps } from "@react-types/button";
import React from "react";

// Button types
export type Kind = "primary" | "secondary" | "tertiary" | "error";

// Button sizes
export type Size = "sm" | "md" | "lg";

// Button props
export type ButtonProps = {
  /** Attribute to change the rendering component */
  as?: "button" | "a";
  /** Button className attribute */
  className?: string;
  /** Button children attribute */
  children?: React.ReactNode | string;
  /** Button loading attribute */
  isLoading?: boolean;
  /** Button kind attribute */
  kind?: Kind;
  /** Button size attribute */
  size?: Size;
  /** Button startIcon attribute */
  startIcon?: React.ReactNode | "string";
  /** Button endIcon attribute */
  endIcon?: React.ReactNode | "string";
  /** Button height attribute */
  height?: string;
  /** Button width attribute */
  width?: string;
  /** Button disabled attribute */
  disabled?: boolean;
  /** Button href attribute */
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  AriaButtonProps;
