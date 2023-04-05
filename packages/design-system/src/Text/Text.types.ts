import React, { ReactNode } from "react";

export type TextKinds =
  | "heading-xl"
  | "heading-l"
  | "heading-m"
  | "heading-s"
  | "heading-xs"
  | "body-m"
  | "body-s"
  | "action-l"
  | "action-m"
  | "action-s"
  | "code";

// Text props
export type TextProps = {
  /** To change the rendering component */
  renderAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: ReactNode;
  /** style the text based on it's function */
  kind?: TextKinds;
  /** the color of the text. Accepts any valid css value. */
  color?: string;
} & React.HTMLAttributes<HTMLLabelElement> &
  React.HTMLAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLSpanElement> &
  React.LabelHTMLAttributes<HTMLLabelElement>;
