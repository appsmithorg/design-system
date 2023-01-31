import { TextFieldProps } from "@react-types/textfield";

export type Size = "sm" | "md";

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
  size?: Size;
  /** width */
  UNSAFE_width?: string;
  /** height */
  UNSAFE_height?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
