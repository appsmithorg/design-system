import { TextFieldProps } from "@react-types/textfield";
import { IconProps } from "Icon/Icon.types";
import { Sizes } from "__config__/types";

export type InputSizes = Extract<Sizes, "sm" | "md">;

export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | undefined;

// Input props
export interface InputProps extends TextFieldProps {
  /** TODO: renderAs needs to changed to as */
  /** Attribute to change the rendering component */
  renderAs?: "input" | "textarea";
  /** (try not to) pass addition classes here */
  className?: string;
  /** Name of the form control. Submitted with the form as part of a name/value pair */
  name?: string;
  /** label position  */
  labelPosition?: "top" | "left";
  /** start icon  */
  startIcon?: string;
  /** start icon props */
  startIconProps?: Omit<IconProps, "name">;
  /** end icon  */
  endIcon?: string;
  /** end icon props */
  endIconProps?: Omit<IconProps, "name">;
  /** size */
  size?: InputSizes;
  /** type */
  type?: InputType;
  /** width */
  UNSAFE_width?: string;
  /** height */
  UNSAFE_height?: string;
  /** value */
  value?: string;
  /** onValue change trigger */
  onChange?: (value: string) => void;
  /** Whether the input given passes the validation parameters. */
  isValid?: boolean;
  /** id for the input element. */
  id?: string;
}
