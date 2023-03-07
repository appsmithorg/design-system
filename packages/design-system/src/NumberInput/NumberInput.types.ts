// NumberInput props
export type NumberInputProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** Value */
  value?: string;
  /** prefix */
  prefix?: string;
  /** suffix */
  suffix?: string;
  /** Scale factor */
  scale?: number;
  /** onValue change trigger */
  onChange?: (value: number) => void;
};
