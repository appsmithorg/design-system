export type SegmentedControlOption = {
  /** The value of the option */
  value: string;
  /** The label of the option */
  label?: string;
  /** The icon of the option */
  startIcon?: React.ReactNode | string;
  /** The icon of the option */
  endIcon?: React.ReactNode | string;
  /** Attribute to disable the option */
  isDisabled?: boolean;
};
// SegmentedControl props
export type SegmentedControlProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** The options of the SegmentedControl */
  options: SegmentedControlOption[];
  /** The defaultValue of the SegmentedControl */
  defaultValue?: string;
  /** The onChange of the SegmentedControl */
  onChange?: (value: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;
