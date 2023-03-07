export interface SearchInputProps {
  /** (try not to) pass addition classes here */
  className?: string;
  /** Value */
  value?: string;
  /** onValue change trigger */
  onChange?: (value: string) => void;
}
