import { TextFieldProps } from "@react-types/textfield";
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
  /** end icon  */
  endIcon?: React.ReactNode;
  /** size */
  size: InputSizes;
  /** width */
  UNSAFE_width?: string;
  /** height */
  UNSAFE_height?: string;
}
