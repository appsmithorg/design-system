import { ReactDatePickerProps } from "react-datepicker";

import { Sizes } from "__config__/types";

export interface DatePickerProps extends ReactDatePickerProps {
  /** The class name to apply to the button component. */
  className?: string;
  /** size of the input field */
  inputSize?: Extract<Sizes, "sm" | "md">;
}
