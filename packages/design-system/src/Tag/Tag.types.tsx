import React from "react";

export type Kind = "success" | "warning" | "info" | "error" | undefined;

export type TagProps = {
  /** The variations of tag. This will determine the color of the tag. */
  kind?: Kind;

  /** (try not to) pass addition classes here */
  className?: string;

  /** the words you want to display */
  children: string;
} & React.HTMLAttributes<HTMLSpanElement>;
