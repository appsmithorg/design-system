import React from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";

// Link props
export type LinkProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
  /** the place to navigate to */
  to: string;
  // TODO: Should be a type containing list of names of allowed icons
  icon?: string;
} & RouterLinkProps;
