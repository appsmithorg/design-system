import React from "react";

import { Button } from "../Button";
import { ButtonProps } from "../Button/Button";
import { useMergeRefs } from "@floating-ui/react";
import { useDialogContext } from "./DialogContext";

export const DialogTrigger = React.forwardRef<HTMLElement, ButtonProps>(
  function DialogTrigger({ children, ...props }, propRef) {
    const context = useDialogContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    return (
      <Button
        data-state={context.open ? "open" : "closed"}
        ref={ref}
        // The user can style the trigger based on the state
        {...context.getReferenceProps(props)}
      >
        {children}
      </Button>
    );
  },
) as typeof Button;
