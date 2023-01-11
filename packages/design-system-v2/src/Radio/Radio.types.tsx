import { RadioGroupProps as StatelyRadioGroupProps } from "react-stately";
export type RadioGroupProps = StatelyRadioGroupProps & {
  /** The list of Radio components. */
  children: React.ReactNode;
  /** The direction of the RadioGroup. */
  direction?: "row" | "column";
  /** The gap between the Radio components. */
  gap?: string;
};
