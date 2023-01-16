import React from "react";
import { ToastOptions } from "react-toastify";

export type Kind = "success" | "warning" | "info" | "error" | undefined;
// Toast props
export type ToastProps = {
  kind?: Kind
} & ToastOptions;
