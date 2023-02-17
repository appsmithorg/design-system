import React from "react";

import { useDialogContext } from "./DialogContext";

export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function DialogClose({ children, ...props }, ref) {
  const { setOpen } = useDialogContext();
  return (
    <button type="button" {...props} onClick={() => setOpen(false)} ref={ref}>
      {children}
    </button>
  );
});
