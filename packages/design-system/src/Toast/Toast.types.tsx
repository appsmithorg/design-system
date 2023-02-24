import React from "react";
import { ToastOptions } from "react-toastify";

export type Kind = "success" | "warning" | "info" | "error" | undefined;
// Toast props
export type ToastProps = {
  /** visual style to be used indicating type of toast */
  kind?: Kind;

  /** An object that displays an action that can be triggered from the toast */
  action?: {
    /** One word describing an action a user may perform upon seeing the toast */
    actionText: string;
    /** A function that carries out the action */
    effect: any;
  };
} & ToastOptions;
