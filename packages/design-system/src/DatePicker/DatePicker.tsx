import React, { useState } from "react";
import BaseDatePicker from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import clsx from "classnames";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import {
  DatePickerCalenderClassName,
  DatePickerCalenderHeaderClassName,
  DatePickerClassName,
  DateTimePickerClassName,
} from "./DatePicker.constants";
import {
  DatePickerHeaderProps,
  DatePickerProps,
  DateRangePickerProps,
} from "./DatePicker.types";
import { StyledDatePickerHeader } from "./DatePicker.styles";
import { Input } from "Input";
import { Button } from "Button";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "Menu";

function DatePicker(props: DatePickerProps) {
  const {
    calendarClassName,
    className,
    dateFormat = "dd/MM/yyyy",
    inputProps,
    inputSize = "md",
    isClearable,
    isDisabled,
    isReadOnly,
    isRequired,
    label,
    onChange,
    placeholderText = "Select date",
    selected,
    yearEndRange,
    yearStartRange,
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
      calendarClassName={clsx(DatePickerCalenderClassName, calendarClassName, {
        [DateTimePickerClassName]: rest.showTimeInput,
      })}
      className={clsx(className, DatePickerClassName)}
      customInput={
        <Input
          {...inputProps}
          endIcon={
            isClearable && selectedDate ? "close-circle-line" : undefined
          }
          endIconProps={{
            onClick: () => onChangeHandler(null, undefined),
          }}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          label={label}
          renderAs="input"
          size={inputSize}
        />
      }
      dateFormat={dateFormat}
      disabled={isDisabled}
      monthsShown={1}
      onChange={onChangeHandler}
      placeholderText={placeholderText}
      readOnly={isReadOnly}
      renderCustomHeader={(props) => {
        return (
          <DatePickerHeader
            {...props}
            dateRangePicker={false}
            endYear={yearEndRange}
            startYear={yearStartRange}
          />
        );
      }}
      required={isRequired}
      selected={selectedDate}
      selectsRange={false}
      showPopperArrow={false}
      timeInputLabel=""
    />
  );
}

function DatePickerHeader(props: DatePickerHeaderProps) {
  const {
    changeMonth,
    changeYear,
    className,
    customHeaderCount,
    dateRangePicker,
    decreaseMonth,
    endYear,
    increaseMonth,
    monthDate,
    nextMonthButtonDisabled,
    prevMonthButtonDisabled,
    startYear,
  } = props;

  const startRange = startYear || 1990;
  const endRange = endYear || getYear(new Date()) + 1;
  const years = range(startRange, endRange, 1);
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
    <StyledDatePickerHeader
      className={clsx(DatePickerCalenderHeaderClassName, className)}
    >
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
        {(customHeaderCount === 1 || !dateRangePicker) && (
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
    dateFormat = "dd/MM/yyyy",
    endDate: propEndDate,
    inputProps,
    inputSize = "md",
    isClearable,
    isDisabled,
    isReadOnly,
    isRequired,
    label,
    onChange,
    placeholderText = "Select date range",
    startDate: propStartDate,
    yearEndRange,
    yearStartRange,
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
          {...inputProps}
          endIcon={
            isClearable && (startDate || endDate)
              ? "close-circle-line"
              : undefined
          }
          endIconProps={{
            onClick: () => setStartDate(null),
          }}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          label={label}
          renderAs="input"
          size={inputSize}
        />
      }
      dateFormat={dateFormat}
      disabled={isDisabled}
      endDate={endDate}
      monthsShown={2}
      onChange={onChangeHandler}
      placeholderText={placeholderText}
      readOnly={isReadOnly}
      renderCustomHeader={(props) => {
        return (
          <DatePickerHeader
            {...props}
            dateRangePicker
            endYear={yearEndRange}
            startYear={yearStartRange}
          />
        );
      }}
      required={isRequired}
      selected={startDate}
      selectsRange
      showPopperArrow={false}
      showTimeInput={false}
      startDate={startDate}
    />
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.defaultProps = {};

DateRangePicker.displayName = "DateRangePicker";

DateRangePicker.defaultProps = {};

export { DatePicker, DateRangePicker };
