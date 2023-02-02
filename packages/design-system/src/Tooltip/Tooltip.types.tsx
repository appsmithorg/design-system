import React from "react";

// Tooltip prop types
export type YOUR_PROP_TYPE_1 = {
  /** YOUR_PROP_TYPE_1 description */
};

// Tooltip props
export type TooltipProps = {
  /** this prop is used when... */
  prop1: undefined;

  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
} & React.TooltipHTMLAttribute<HTMLTooltipElement>;
