import { InputHTMLAttributes } from "react";

export type ToggleProps = {

  /** toggle cannot be interacted with */
  isDisabled?: boolean;
  /** toggle is switched on by default*/
  checked?: boolean;
  /** triggered when the state of the toggle changes */
  onChange?: any;
  /** label to the toggle */
  children: string;


} & InputHTMLAttributes<HTMLInputElement>;
