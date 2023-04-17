import { TextFieldProps } from "@react-types/textfield";
import { IconProps } from "Icon/Icon.types";
import { Sizes } from "__config__/types";

export type InputSizes = Extract<Sizes, "sm" | "md">;

// Input props
export interface InputProps extends TextFieldProps {
  /** TODO: renderAs needs to changed to as */
  /** Attribute to change the rendering component */
  renderAs?: "input" | "textarea";
  /** (try not to) pass addition classes here */
  className?: string;
  /** label position  */
  labelPosition?: "top" | "left";
  /** start icon  */
  startIcon?: string;
  /** start icon props */
  startIconProps?: IconProps;
  /** end icon  */
  endIcon?: string;
  /** end icon props */
  endIconProps?: IconProps;
  /** size */
  size?: InputSizes;
  /** type */
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
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
