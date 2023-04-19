import { ReactNode } from "react";
import { AriaCheckboxProps } from "@react-aria/checkbox";

export type CheckboxProps = {
  name?: string;
  value?: string;
  children?: ReactNode;
  defaultSelected?: boolean;
  isSelected?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  onChange?: (isSelected: boolean) => void;
} & Omit<AriaCheckboxProps, "onChange"> &
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "onChange">;
