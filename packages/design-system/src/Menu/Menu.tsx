import React from "react";
import * as RadixMenu from "@radix-ui/react-dropdown-menu";

import {
  StyledMenuContent,
  StyledMenuItem,
  StyledMenuSubContent,
  StyledMenuSubTrigger,
} from "./Menu.styles";
import { MenuItemProps } from "./Menu.types";

function MenuContent({
  children,
  ...props
}: RadixMenu.DropdownMenuContentProps) {
  return (
    <RadixMenu.Portal>
      {/* sideOffset is a number in Radix. */}
      <StyledMenuContent sideOffset={4} {...props}>
        {children}
      </StyledMenuContent>
    </RadixMenu.Portal>
  );
}

function MenuSubContent({
  children,
  ...props
}: RadixMenu.DropdownMenuSubContentProps) {
  return (
    <RadixMenu.Portal>
      {/* sideOffset is a number in Radix. */}
      <StyledMenuSubContent sideOffset={4} {...props}>
        {children}
      </StyledMenuSubContent>
    </RadixMenu.Portal>
  );
}

function MenuTrigger({
  children,
  ...props
}: RadixMenu.DropdownMenuTriggerProps) {
  return (
    <RadixMenu.Trigger asChild {...props}>
      {children}
    </RadixMenu.Trigger>
  );
}

function MenuItem({ children, endIcon, startIcon, ...props }: MenuItemProps) {
  return (
    <StyledMenuItem {...props}>
      {startIcon && <span>{startIcon}</span>}
      {children}
    </StyledMenuItem>
  );
}

function MenuSubTrigger({
  children,
  ...props
}: RadixMenu.DropdownMenuSubTriggerProps) {
  return <StyledMenuSubTrigger {...props}>{children}</StyledMenuSubTrigger>;
}

const Menu = RadixMenu.Root;
const MenuSub = RadixMenu.Sub;

export {
  Menu,
  MenuContent,
  MenuSubContent,
  MenuTrigger,
  MenuItem,
  MenuSub,
  MenuSubTrigger,
};
