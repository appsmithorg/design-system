import React, { ReactNode } from "react";

// TODO: replace these values with names from the typography scale
// this will also replace the values within typography scale in style.
export type Kind =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"

// Text props
export type TextProps = {
  /** To change the rendering component */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: ReactNode;
  /** style the text based on it's function */
  kind?: Kind;
} & React.HTMLAttributes<HTMLLabelElement> &
  React.HTMLAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLSpanElement>;
