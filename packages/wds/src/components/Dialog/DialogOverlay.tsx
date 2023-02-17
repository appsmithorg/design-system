import React from "react";
import { FloatingPortal, FloatingOverlay } from "@floating-ui/react";

import { useDialogContext } from "./DialogContext";

export const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function DialogOverlay(props, propRef) {
  const { children } = props;
  const { context } = useDialogContext();

  return (
    <FloatingPortal>
      {context.open && (
        <FloatingOverlay data-component="overlay" lockScroll ref={propRef}>
          {children}
        </FloatingOverlay>
      )}
    </FloatingPortal>
  );
});
