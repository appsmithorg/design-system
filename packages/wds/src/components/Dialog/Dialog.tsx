import * as React from "react";

import { useDialog } from "./useDialog";
import { DialogContext } from "./DialogContext";

interface DialogOptions {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({
  children,
  ...options
}: {
  children: React.ReactNode;
} & DialogOptions) {
  const dialog = useDialog(options);

  return (
    <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
  );
}
