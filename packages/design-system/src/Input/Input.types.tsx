import { ChangeEventHandler } from "react";
import { TextFieldProps } from "@react-types/textfield";
import { IconProps } from "Icon/Icon.types";
import { Sizes } from "__config__/types";

export type InputSizes = Extract<Sizes, "sm" | "md">;

// Input props
export interface InputProps extends TextFieldProps {
  /** Attribute to change the rendering component */
  as: "input" | "textarea";
  /** (try not to) pass addition classes here */
  className?: string;
  /** label position  */
  labelPosition?: "top" | "left";
  /** start icon  */
  startIcon?: React.ReactNode;
  /** start icon props */
  startIconProps?: IconProps;
  /** end icon  */
  endIcon?: React.ReactNode;
  /** end icon props */
  endIconProps?: IconProps;
  /** size */
  size: InputSizes;
  /** width */
  UNSAFE_width?: string;
  /** height */
  UNSAFE_height?: string;
  /** value */
  value?: string;
  /** onValue change trigger */
  onChange?: (value: string) => void;
}

export interface SearchInputProps {
  /** (try not to) pass addition classes here */
  className?: string;
  /** Value */
  value?: string;
  /** onValue change trigger */
  onChange?: (value: string) => void;
}
