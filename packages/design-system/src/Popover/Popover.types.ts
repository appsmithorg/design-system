import { ReactNode } from "react";
import { PopoverContentProps as RadixPopoverContentProps } from "@radix-ui/react-popover";
import { Sizes } from "../__config__/types";

export type PopoverSize = Extract<Sizes, "sm" | "md">;

export type PopoverHeaderProps = {
  /** the words you want to display in the header */
  children?: string;
  /** if the popover can be dismissed or not */
  isClosable?: boolean;
};

export type PopoverContentProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** Contains PopoverHeader and PopoverBody */
  children: ReactNode;
  /** the minimum size of the popover */
  size?: PopoverSize;
} & RadixPopoverContentProps;
