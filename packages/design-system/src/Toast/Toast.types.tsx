import { ToastOptions } from "react-toastify";
import { ButtonProps } from "../Button/Button.types";
import { Kinds } from "../__config__/types";

export type Kind = Kinds;

export type ToastProps = {
  /** visual style to be used indicating type of toast */
  kind?: Kind;
  /** An object that displays an action that can be triggered from the toast */
  action?: {
    /** One word describing an action a user may perform upon seeing the toast */
    text: string;
    /** A function that carries out the action */
    effect: any;
  } & ButtonProps;
} & ToastOptions;
