import React from "react";
import { Kind } from "../__config__/types";
import { LinkProps } from "../Link/Link.types";

export type CalloutKind = Kind;

export type CalloutLinkProps = Omit<LinkProps, "className, kind">;

export type CalloutProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: React.ReactNode;
  /** visual style to be used indicating type of callout */
  kind?: CalloutKind;
  /** whether or not the callout should be closable */
  isClosable?: boolean;
  /** any additional links that might be present in the callout */
  links?: CalloutLinkProps[];
  /** callback for when the callout is closed */
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
