import { AriaSwitchProps } from "@react-aria/switch";
import { ReactNode } from "react";

// Switch props
export type SwitchProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** sets the on/off state of the switch */
  isSelected?: boolean;
  /** renders the switch disabled */
  isDisabled?: boolean;
  
  children?: ReactNode;
} & AriaSwitchProps;
