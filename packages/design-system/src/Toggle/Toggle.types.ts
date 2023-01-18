import { InputHTMLAttributes } from "react";

export type ToggleProps = {

  /** toggle cannot be interacted with */
  disabled?: boolean;
  /** toggle is switched on by default*/
  checked?: boolean;
  /** triggered when the state of the toggle changes */
  onChange?: any;


} & InputHTMLAttributes<HTMLInputElement>;
