import React, { useState } from "react";
import BaseDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import clsx from "classnames";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import {
  DatePickerCalenderClassName,
  DatePickerClassName,
} from "./DatePicker.constants";
import { DatePickerProps, DateRangePickerProps } from "./DatePicker.types";
import { StyledDatePickerHeader } from "./DatePicker.styles";
import { Input } from "Input";
import { Button } from "Button";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "Menu";

function DatePicker(props: DatePickerProps) {
  const {
    calendarClassName,
    className,
    inputSize = "md",
    isClearable,
    onChange,
    selected,
    ...rest
  } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    selected || null,
  );

  const onChangeHandler = (
    date: Date | null,
    e: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    setSelectedDate(date);
    onChange && onChange(date, e);
  };

  return (
    <BaseDatePicker
      {...rest}
      calendarClassName={clsx(DatePickerCalenderClassName, calendarClassName)}
      className={clsx(className, DatePickerClassName)}
      customInput={
        <Input
          endIcon={
            isClearable && selectedDate ? "close-circle-line" : undefined
          }
          endIconProps={{
            onClick: () => onChangeHandler(null, undefined),
          }}
          renderAs="input"
          size={inputSize}
        />
      }
      monthsShown={1}
      onChange={onChangeHandler}
      renderCustomHeader={DatePickerHeader}
      selected={selectedDate}
      selectsRange={false}
      showPopperArrow={false}
      showTimeInput
    />
  );
}

function DatePickerHeader(props: ReactDatePickerCustomHeaderProps) {
  const {
    changeMonth,
    changeYear,
    customHeaderCount,
    decreaseMonth,
    increaseMonth,
    monthDate,
    nextMonthButtonDisabled,
    prevMonthButtonDisabled,
  } = props;

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
        {customHeaderCount === 0 && (
          <Button
            disabled={prevMonthButtonDisabled}
            isIconButton
            kind="tertiary"
            onClick={decreaseMonth}
            startIcon="arrow-left-s-line"
          />
        )}
        <Menu>
          <MenuTrigger>
            <Button
              disabled={prevMonthButtonDisabled}
              endIcon="arrow-down-s-line"
              kind="tertiary"
              size="md"
            >
              {months[getMonth(monthDate)]}
            </Button>
          </MenuTrigger>
          <MenuContent
            loop
            portalProps={{
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              container: document.getElementsByClassName(
                DatePickerCalenderClassName,
              )[0],
            }}
          >
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
        <Menu>
          <MenuTrigger>
            <Button
              disabled={prevMonthButtonDisabled}
              endIcon="arrow-down-s-line"
              kind="tertiary"
              size="md"
            >
              {getYear(monthDate)}
            </Button>
          </MenuTrigger>
          <MenuContent
            loop
            portalProps={{
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              container: document.getElementsByClassName(
                DatePickerCalenderClassName,
              )[0],
            }}
          >
            {years.map((year) => (
              <MenuItem key={year} onSelect={() => changeYear(year)}>
                {year}
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>
        {customHeaderCount === 1 && (
          <Button
            disabled={nextMonthButtonDisabled}
            isIconButton
            kind="tertiary"
            onClick={increaseMonth}
            startIcon="arrow-right-s-line"
          />
        )}
      </div>
    </StyledDatePickerHeader>
  );
}

function DateRangePicker(props: DateRangePickerProps) {
  const {
    calendarClassName,
    className,
    endDate: propEndDate,
    inputSize = "md",
    isClearable,
    onChange,
    startDate: propStartDate,
    ...rest
  } = props;
  const [startDate, setStartDate] = useState<Date | null>(
    propStartDate || null,
  );
  const [endDate, setEndDate] = useState<Date | null>(propEndDate || null);

  const onChangeHandler = (
    date: [Date | null, Date | null],
    e: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    const [startDate, endDate] = date;
    setStartDate(startDate);
    setEndDate(endDate);
    onChange && onChange(date, e);
  };

  return (
    <BaseDatePicker
      {...rest}
      calendarClassName={clsx(DatePickerCalenderClassName, calendarClassName)}
      className={clsx(className, DatePickerClassName)}
      customInput={
        <Input
          endIcon={
            isClearable && (startDate || endDate)
              ? "close-circle-line"
              : undefined
          }
          endIconProps={{
            onClick: () => setStartDate(null),
          }}
          renderAs="input"
          size={inputSize}
        />
      }
      endDate={endDate}
      monthsShown={2}
      onChange={onChangeHandler}
      renderCustomHeader={DatePickerHeader}
      selected={startDate}
      selectsRange
      showPopperArrow={false}
      showTimeInput
      startDate={startDate}
    />
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.defaultProps = {};

DateRangePicker.displayName = "DateRangePicker";

DateRangePicker.defaultProps = {};

export { DatePicker, DateRangePicker };
