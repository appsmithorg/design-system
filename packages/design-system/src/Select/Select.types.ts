import { SelectProps as RCSelectProps } from "rc-select";
import { Sizes, ValidationState } from "__config__/types";

export type SelectSizes = Extract<Sizes, "sm" | "md">;

export type SelectProps = RCSelectProps & {
  size?: SelectSizes;
  isMultiSelect?: boolean;
  validationState?: ValidationState;
};
