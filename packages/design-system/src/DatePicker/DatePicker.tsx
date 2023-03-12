import React, { useState } from "react";
import BaseDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import {
  DatePickerCalenderClassName,
  DatePickerClassName,
} from "./DatePicker.constants";
import { DatePickerProps } from "./DatePicker.types";
import { StyledDatePickerHeader } from "./DatePicker.styles";
import { Input } from "Input";
import { Button } from "Button";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "Menu";

function DatePicker(props: DatePickerProps) {
  const { inputSize = "md" } = props;
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <BaseDatePicker
      calendarClassName={DatePickerCalenderClassName}
      className={DatePickerClassName}
      customInput={<Input renderAs="input" size={inputSize} />}
      excludeDates={[new Date()]}
      isClearable={false}
      onChange={(date) => setStartDate(date)}
      renderCustomHeader={DatePickerHeader}
      selected={startDate}
      showPopperArrow={false}
    />
  );
}

function DatePickerHeader(props: ReactDatePickerCustomHeaderProps) {
  const {
    changeMonth,
    changeYear,
    date,
    decreaseMonth,
    increaseMonth,
    nextMonthButtonDisabled,
    prevMonthButtonDisabled,
  } = props;
  const [isYearMenuOpen, setIsYearMenuOpen] = useState(false);

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <StyledDatePickerHeader>
      <div>
        <Button
          disabled={prevMonthButtonDisabled}
          isIconButton
          kind="tertiary"
          onPress={decreaseMonth}
          startIcon="arrow-left-s-line"
        />
        <Menu onOpenChange={setIsYearMenuOpen} open={isYearMenuOpen}>
          <MenuTrigger>
            <Button
              disabled={prevMonthButtonDisabled}
              endIcon="arrow-down-s-line"
              kind="tertiary"
              // onPress={() => {
              //   setIsYearMenuOpen(!isYearMenuOpen);
              // }}
              size="md"
            >
              {months[getMonth(date)]}
            </Button>
          </MenuTrigger>
          <MenuContent loop>
            {months.map((month) => (
              <MenuItem
                key={month}
                onSelect={() => changeMonth(months.indexOf(month))}
              >
                {month}
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>
      </div>
      <div>
        <Button
          disabled={prevMonthButtonDisabled}
          endIcon="arrow-down-s-line"
          kind="tertiary"
          size="md"
        >
          2023
        </Button>
        <Button
          disabled={prevMonthButtonDisabled}
          isIconButton
          kind="tertiary"
          onClick={decreaseMonth}
          startIcon="arrow-right-s-line"
        />
      </div>
    </StyledDatePickerHeader>
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.defaultProps = {};

export { DatePicker };
