import React, { useState } from "react";
import BaseDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.styles.css";
import {
  DatePickerCalenderClassName,
  DatePickerClassName,
} from "./DatePicker.constants";
import { Input } from "Input";
import { DatePickerProps } from "./DatePicker.types";

function DatePicker(props: DatePickerProps) {
  const { inputSize = "md" } = props;
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <BaseDatePicker
      calendarClassName={DatePickerCalenderClassName}
      className={DatePickerClassName}
      customInput={<Input as="input" size={inputSize} />}
      onChange={(date) => setStartDate(date)}
      selected={startDate}
      showPopperArrow={false}
    />
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.defaultProps = {};

export { DatePicker };
