import React from "react";
import { Kinds } from "../__config__/types";

export type Kind = Kinds;

export type CalloutProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
  /** visual style to be used indicating type of callout */
  kind?: Kind;
  /** whether or not the callout should be closable */
  isClosable?: boolean;
  /** any additional links that might be present in the callout */
  links?: [
    {
      text: string;
      to: string;
      startIcon?: string;
      endIcon?: string;
    },
  ];
} & React.HTMLAttributes<HTMLDivElement>;
