import { TextFieldProps } from "@react-types/textfield";

// TextInput props
export type TextInputProps = TextFieldProps & {
  /** Attribute to change the rendering component */
  as?: "input" | "textarea";
  /** (try not to) pass addition classes here */
  className?: string;
  /** label position  */
  labelPosition?: "top" | "left";
} & React.InputHTMLAttributes<HTMLInputElement>;
