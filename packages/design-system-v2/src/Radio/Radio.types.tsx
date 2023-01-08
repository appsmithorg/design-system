export type OptionProps = {
  /** disabled attribute - to disable one particular radio button */
  disabled?: boolean;
  /** description element */
  description?: React.ReactNode | string;
  /** label attribute */
  label: string;
  /** value attribute */
  value: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type RadioProps = {
  /** name attribute */
  name: string;
  /** gap attribute - defines spacing between each element */
  gap?: string;
  /** direction attribute - defines radio button render direction */
  direction?: "row" | "column";
  /** disabled attribute - this will disable all radio buttons */
  disabled?: boolean;
  /** defaultValue attribute */
  defaultValue?: string;
  /** showDescription attribute - this attribute allows to define when to show description.
   * always: will be showing description for all radio always
   * selected: will show description only for the selected item
   * never: hides description
   */
  showDescription?: "always" | "selected" | "never";
  /** onChange attribute */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** options attribute */
  options: OptionProps[];
} & React.HTMLAttributes<HTMLDivElement>;
