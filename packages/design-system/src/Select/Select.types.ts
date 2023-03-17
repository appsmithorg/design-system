import { SelectProps as RCSelectProps } from "rc-select";
import { OptionProps } from "rc-select/lib/Option";
import { Sizes } from "__config__/types";

export type SelectSizes = Extract<Sizes, "sm" | "md">;

export type SelectProps = RCSelectProps & {
  size?: SelectSizes;
};

export type SelectOptionProps = OptionProps & {
  size?: SelectSizes;
};
