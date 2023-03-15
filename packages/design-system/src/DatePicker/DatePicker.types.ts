import { ReactDatePickerProps } from "react-datepicker";

import { Sizes } from "__config__/types";

interface CommonProps {
  /** The class name to apply to the button component. */
  className?: string;
  /** size of the input field */
  inputSize?: Extract<Sizes, "sm" | "md">;
}
export type DatePickerProps = Omit<ReactDatePickerProps, "selectsRange"> &
  CommonProps;

export type DateRangePickerProps = ReactDatePickerProps &
  CommonProps & {
    onChange: (
      dates: [Date | null, Date | null],
      e: React.SyntheticEvent<any, Event> | undefined,
    ) => void;
  };
