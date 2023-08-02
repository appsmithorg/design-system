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
} from "./Popover.styles";
import { Text } from "../Text";
import { Button } from "../Button";

function PopoverTrigger(props: PopoverTriggerProps) {
  return (
    <Trigger {...props} asChild>
      {props.children}
    </Trigger>
  );
}

// Text kind should be section-heading
function PopoverHeader({ children, isClosable = true }: PopoverHeaderProps) {
  return (
    <StyledHeader>
      <Text>{children}</Text>
      {isClosable && (
        <StyledClose>
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
      <StyledContent $size={size} sideOffset={4} {...props}>
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
