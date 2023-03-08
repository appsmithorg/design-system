export interface SearchInputProps {
  /** (try not to) pass additional classes here */
  className?: string;
  /** Value */
  value?: string;
  /** placeholder */
  placeholder?: string;
  /** onValue change trigger */
  onChange?: (value: string) => void;
}
