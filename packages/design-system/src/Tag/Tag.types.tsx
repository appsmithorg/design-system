import React from "react";
import { Kind, Sizes } from "../__config__/types";

export type TagSize = Extract<Sizes, "sm" | "md">;

export type TagKind = Kind | "special" | "premium";

export type TagProps = {
  /** the size of the tag */
  size?: TagSize;

  /** (try not to) pass addition classes here */
  className?: string;

  /** the words you want to display */
  children: string | number | React.ReactNode;

  /** whether or not the tag can be dismissed*/
  isClosable?: boolean;

  /** the kind of the tag */
  kind?: TagKind;

  /** the function to call when the tag is dismissed */
  onClose?: () => void;
} & React.HTMLAttributes<HTMLSpanElement>;
