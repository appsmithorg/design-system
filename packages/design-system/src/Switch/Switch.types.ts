import { AriaSwitchProps } from "@react-aria/switch";
import { ReactNode } from "react";

// Switch props
export type SwitchProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
} & AriaSwitchProps;
