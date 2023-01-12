import React from "react";

// Tab prop types
export type YOUR_PROP_TYPE_1 = {
  /** YOUR_PROP_TYPE_1 description */
}

// Tab props
export type TabProps = {

  /** this prop is used when... */
  prop1: undefined;

  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;

} & React.TabHTMLAttribute<HTMLTabElement>
