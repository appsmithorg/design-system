import { SelectProps as RCSelectProps } from "rc-select";
import { Sizes } from "__config__/types";
import { OptionProps as RCOptionProps } from "rc-select/es/Option";

export type SelectSizes = Extract<Sizes, "sm" | "md">;

export type SelectProps = RCSelectProps & {
  size?: SelectSizes;
  isMultiSelect?: boolean;
  isDisabled?: boolean;
};

export type SelectOptionProps = RCOptionProps & {
  isDisabled?: boolean;
};
