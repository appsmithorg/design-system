import { TextFieldProps } from "@react-types/textfield";
import { Sizes } from "__config__/types";

export type TextInputSizes = Extract<Sizes, "md" | "lg">;

// TextInput props
export type TextInputProps = TextFieldProps & {
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
  size: TextInputSizes;
  /** width */
  UNSAFE_width?: string;
  /** height */
  UNSAFE_height?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
