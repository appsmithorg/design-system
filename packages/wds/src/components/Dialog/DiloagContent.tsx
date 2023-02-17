import React from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useId,
} from "@floating-ui/react";

import { useTransition } from "react-spring";
import { useDialogContext } from "./DialogContext";
import { StyledDialogContent } from "./index.styled";

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function DialogContent(props, propRef) {
  const { context: floatingContext, ...context } = useDialogContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (
    <FloatingFocusManager context={floatingContext}>
      <StyledDialogContent
        aria-describedby={context.descriptionId}
        aria-labelledby={context.labelId}
        ref={ref}
        {...context.getFloatingProps(props)}
      >
        {props.children}
      </StyledDialogContent>
    </FloatingFocusManager>
  );
});
