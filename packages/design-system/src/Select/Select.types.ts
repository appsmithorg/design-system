import React from "react";

// Select prop types
export type YOUR_PROP_TYPE_1 = {
  /** YOUR_PROP_TYPE_1 description */
};

// Select props
export type SelectProps = {
  /** this prop is used when... */
  prop1: undefined;

  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
} & React.SelectHTMLAttribute<HTMLSelectElement>;
