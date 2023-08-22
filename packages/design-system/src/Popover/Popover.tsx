import React from "react";
import {
  Root,
  Trigger,
  PopoverTriggerProps,
  Portal,
} from "@radix-ui/react-popover";

import { PopoverHeaderProps, PopoverContentProps } from "./Popover.types";
import {
  StyledBody,
  StyledClose,
  StyledContent,
  StyledHeader,
  StyledHeaderText,
} from "./Popover.styles";
import { Button } from "../Button";
import {
  PopoverBodyContentClassName,
  PopoverBodyHeaderClassName,
  PopoverTriggerClassName,
} from "./Popover.constants";

function PopoverTrigger(props: PopoverTriggerProps) {
  return (
    <Trigger
      className={`${PopoverTriggerClassName} ${props.className}`}
      {...props}
      asChild
    >
      {props.children}
    </Trigger>
  );
}

// Text kind should be section-heading
function PopoverHeader({
  children,
  className,
  isClosable = true,
}: PopoverHeaderProps) {
  return (
    <StyledHeader className={`${PopoverBodyHeaderClassName} ${className}`}>
      <StyledHeaderText>{children}</StyledHeaderText>
      {isClosable && (
        <StyledClose asChild>
          <Button
            isIconButton
            kind="tertiary"
            size="sm"
            startIcon="close-line"
          />
        </StyledClose>
      )}
    </StyledHeader>
  );
}
function PopoverContent({ size = "sm", ...props }: PopoverContentProps) {
  return (
    <Portal>
      <StyledContent
        $size={size}
        className={`${PopoverBodyContentClassName} ${props.className}`}
        sideOffset={4}
        {...props}
      >
        {props.children}
      </StyledContent>
    </Portal>
  );
}

const Popover = Root;
Popover.displayName = "Popover";
Popover.defaultProps = {};

const PopoverBody = StyledBody;
PopoverBody.displayName = "Popover Body";

export { Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger };
