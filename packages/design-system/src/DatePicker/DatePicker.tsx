import React, { useEffect, useState } from "react";
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
  DatePickerFooterClassName,
  DatePickerFooterClearClassName,
  DatePickerFooterTodayClassName,
  DateTimePickerClassName,
} from "./DatePicker.constants";
import {
  DatePickerHeaderProps,
  DatePickerProps,
  DateRangePickerProps,
} from "./DatePicker.types";
import { DatePickerFooter, StyledDatePickerHeader } from "./DatePicker.styles";
import { Input } from "Input";
import { Button } from "Button";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "Menu";
import { Divider } from "Divider";
import { createDefaultShortcuts } from "./utils";
import type { DateRangeShortCutsConfig } from "./utils";

function DatePicker(props: DatePickerProps) {
  const {
    calendarClassName,
    className,
    dateFormat = "MM/dd/yyyy",
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (selected !== selectedDate) {
      setSelectedDate(selected || null);
    }
  }, [selected]);

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
          style={{ caretColor: "transparent" }}
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
    >
      {props.showTimeInput ? (
        <>
          <Divider />
          <DatePickerFooter className={DatePickerFooterClassName}>
            <Button
              className={DatePickerFooterTodayClassName}
              kind="tertiary"
              onClick={() => setSelectedDate(new Date())}
            >
              Today
            </Button>
            <Button
              className={DatePickerFooterClearClassName}
              kind="tertiary"
              onClick={() => setSelectedDate(null)}
            >
              Clear
            </Button>
          </DatePickerFooter>
        </>
      ) : null}
    </BaseDatePicker>
  );
}

interface DateRangeShortcutsProps extends DateRangeShortCutsConfig {
  onChangeHandler: (
    date: [Date | null, Date | null],
    e: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
}

function DateRangeShortcuts(props: DateRangeShortcutsProps) {
  const [selectedShortCut, setSelectedShortCut] = useState("");
  const {
    allowSingleDayRange = false,
    onChangeHandler,
    showRangeShortCuts = false,
    useSingleDateShortcuts = false,
  } = props;
  const shortCuts = createDefaultShortcuts(
    allowSingleDayRange,
    showRangeShortCuts,
    useSingleDateShortcuts,
  );
  return (
    <>
      {shortCuts.map((each) => {
        const onClickHandle = (e: any) => {
          onChangeHandler(each.dateRange, e);
          setSelectedShortCut(each.label);
        };
        const isSelected = selectedShortCut === each.label;
        return (
          <div
            className={`ads-v2-daterange-shortcut ads-v2-shortcut-${
              each.label
            } ${isSelected && "ads-v2-shortcut-selected"}`}
            onClick={onClickHandle}
          >
            {each.label}
          </div>
        );
      })}
    </>
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

  const [selectedYear, setSelectedYear] = useState<number>(getYear(monthDate));
  const startRange = startYear || 1990;
  const endRange = endYear || getYear(new Date());
  const years = range(startRange, endRange + 1, 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // TODO: Fix this, causing unexpected behavior
  // const handleScroll = React.useCallback((menuItem) => {
  //   setTimeout(() => {
  //     if (!menuItem) return;
  //     menuItem?.scrollIntoView({ behavior: "smooth"});
  //   }, 0);
  // }, []);

  const handleYearChange = (year: number) => {
    changeYear(year);
    setSelectedYear(year);
  };

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
            style={{ minWidth: "60px" }}
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
              {selectedYear}
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
            style={{ minWidth: "unset" }}
          >
            {years.map((year) => (
              <MenuItem
                data-value={year}
                key={year}
                onSelect={() => handleYearChange(year)}
                // ref={year === selectedYear ? handleScroll : undefined}
              >
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

function DateRangePicker(
  props: DateRangePickerProps & DateRangeShortCutsConfig,
) {
  const {
    calendarClassName,
    className,
    dateFormat = "MM/dd/yyyy",
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
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (propStartDate !== startDate) {
      setStartDate(propStartDate || null);
    }
    if (propEndDate !== endDate) {
      setEndDate(propEndDate || null);
    }
  }, [propStartDate, propEndDate]);

  const onChangeHandler = (
    date: [Date | null, Date | null],
    e: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    const [startDate, endDate] = date;
    setStartDate(startDate);
    setEndDate(endDate);
    onChange && onChange(date, e);
  };

  const onClearhandler = () => {
    setStartDate(null);
    setEndDate(null);
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
          // TODO: Replace this with tertiary button
          endIconProps={{
            onClick: onClearhandler,
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
      openToDate={startDate || undefined}
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
    >
      <DateRangeShortcuts
        allowSingleDayRange={props.allowSingleDayRange}
        onChangeHandler={onChangeHandler}
        showRangeShortCuts={props.showRangeShortCuts}
        useSingleDateShortcuts={props.useSingleDateShortcuts}
      />
    </BaseDatePicker>
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.defaultProps = {};

DateRangePicker.displayName = "DateRangePicker";

DateRangePicker.defaultProps = {};

export { DatePicker, DateRangePicker };
