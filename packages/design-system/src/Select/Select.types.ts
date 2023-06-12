import { SelectProps as RCSelectProps } from "rc-select";
import { Sizes } from "__config__/types";
import { OptionProps } from "rc-select/lib/Option";

export type SelectSizes = Extract<Sizes, "sm" | "md">;

export type SelectProps = RCSelectProps & {
  size?: SelectSizes;
  isMultiSelect?: boolean;
  isDisabled?: boolean;
  isValid?: boolean;
  isLoading?: boolean;
};

export type SelectOptionProps = OptionProps;
