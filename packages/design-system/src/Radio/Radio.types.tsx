import { RadioGroupProps as StatelyRadioGroupProps } from "@react-stately/radio";
export type RadioGroupProps = StatelyRadioGroupProps & {
  /** The list of Radio components. */
  children: React.ReactNode;
  /** The gap between the Radio components. */
  gap?: string;
} & React.HTMLAttributes<HTMLDivElement>;
