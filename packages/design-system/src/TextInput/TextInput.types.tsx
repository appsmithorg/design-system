import { TextFieldProps } from "@react-types/textfield";

export type Size = "sm" | "md";

// TextInput props
export type TextInputProps = TextFieldProps & {
  /** Attribute to change the rendering component */
  as?: "input" | "textarea";
  /** (try not to) pass addition classes here */
  className?: string;
  /** label position  */
  labelPosition?: "top" | "left";
  /** start icon  */
  startIcon?: React.ReactNode;
  /** end icon  */
  endIcon?: React.ReactNode;
  /** width */
  width?: string;
  /** height */
  height?: string;
  /** size */
  size?: Size;
} & React.InputHTMLAttributes<HTMLInputElement>;
