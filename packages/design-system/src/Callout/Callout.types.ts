import React from "react";
import { Kinds } from "../__config__/types";

export type Kind = Kinds | undefined;

export type CalloutProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
  /** visual style to be used indicating type of callout */
  kind?: Kind;
} & React.HTMLAttributes<HTMLDivElement>;
