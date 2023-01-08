export type RadioProps = {
  /** checked attribute */
  checked?: boolean;
  /** disabled attribute */
  disabled?: boolean;
  /** label attribute */
  label?: string;
  /** name attribute */
  name?: string;
  /** value attribute */
  value?: string;
  /** onChange attribute */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
