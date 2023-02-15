import React from "react";

// Menu prop types
export type YOUR_PROP_TYPE_1 = {
  /** YOUR_PROP_TYPE_1 description */
};

// Menu props
export type MenuProps = {
  /** this prop is used when... */
  prop1: undefined;

  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
} & React.MenuHTMLAttribute<HTMLMenuElement>;
