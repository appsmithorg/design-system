// Credits to blueprint(https://github.com/palantir/blueprint/blob/develop/packages/datetime/src/shortcuts.tsx#L132)
export interface DateRangeShortCutsConfig {
  showRangeShortCuts?: boolean;
  allowSingleDayRange?: boolean;
  hasTimePrecision?: boolean;
  useSingleDateShortcuts?: boolean;
}
function clone(d: Date) {
  return new Date(d.getTime());
}

export type DateRange = [Date | null, Date | null];
export type DateRangeShortcut = {
  label: string;
  dateRange: DateRange;
};

function createShortcut(
  label: string,
  dateRange: DateRange,
): DateRangeShortcut {
  return { dateRange, label };
}

export function createDefaultShortcuts(
  allowSingleDayRange: boolean,
  hasTimePrecision: boolean,
  useSingleDateShortcuts: boolean,
) {
  const today = new Date();
  const makeDate = (action: (d: Date) => void) => {
    const returnVal = clone(today);
    action(returnVal);
    returnVal.setDate(returnVal.getDate() + 1);
    return returnVal;
  };

  const tomorrow = makeDate(() => null);
  const yesterday = makeDate((d) => d.setDate(d.getDate() - 2));
  const oneWeekAgo = makeDate((d) => d.setDate(d.getDate() - 7));
  const oneMonthAgo = makeDate((d) => d.setMonth(d.getMonth() - 1));
  const threeMonthsAgo = makeDate((d) => d.setMonth(d.getMonth() - 3));
  const sixMonthsAgo = makeDate((d) => d.setMonth(d.getMonth() - 6));
  const oneYearAgo = makeDate((d) => d.setFullYear(d.getFullYear() - 1));
  const twoYearsAgo = makeDate((d) => d.setFullYear(d.getFullYear() - 2));

  const singleDayShortcuts =
    allowSingleDayRange || useSingleDateShortcuts
      ? [
          createShortcut("Today", [today, hasTimePrecision ? tomorrow : today]),
          createShortcut("Yesterday", [
            yesterday,
            hasTimePrecision ? today : yesterday,
          ]),
        ]
      : [];

  return [
    ...singleDayShortcuts,
    createShortcut(useSingleDateShortcuts ? "1 week ago" : "Past week", [
      oneWeekAgo,
      today,
    ]),
    createShortcut(useSingleDateShortcuts ? "1 month ago" : "Past month", [
      oneMonthAgo,
      today,
    ]),
    createShortcut(useSingleDateShortcuts ? "3 months ago" : "Past 3 months", [
      threeMonthsAgo,
      today,
    ]),
    // Don't include a couple of these for the single date shortcut
    ...(useSingleDateShortcuts
      ? []
      : [createShortcut("Past 6 months", [sixMonthsAgo, today])]),
    createShortcut(useSingleDateShortcuts ? "1 year ago" : "Past year", [
      oneYearAgo,
      today,
    ]),
    ...(useSingleDateShortcuts
      ? []
      : [createShortcut("Past 2 years", [twoYearsAgo, today])]),
  ];
}
