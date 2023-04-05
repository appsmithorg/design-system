// NumberInput props
export type NumberInputProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** Whether the input is disabled. */
  isDisabled?: boolean;
  /** Whether the input can be selected but not changed by the user. */
  isReadOnly?: boolean;
  /** Whether the input is required. */
  isRequired?: boolean;
  /** Label of the input. */
  label?: string;
  /** Label position */
  labelPosition?: "top" | "left";
  /** Description of the input. */
  description?: string;
  /** Error message of the input. Based on this, the input will show error state. */
  errorMessage?: string;
  /** Value */
  value?: number;
  /** prefix */
  prefix?: string;
  /** suffix */
  suffix?: string;
  /** Scale factor which value should increment or decrement. */
  scale?: number;
  /** placeholder */
  placeholder?: string;
  /** onValue change trigger */
  onChange?: (value: number) => void;
  /** Whether the input given passes the validation parameters. */
  isValid?: boolean;
};
