import React from "react";
import * as RadixMenu from "@radix-ui/react-dropdown-menu";

import {
  StyledMenuContent,
  StyledMenuItem,
  StyledMenuSubContent,
  StyledMenuSubTrigger,
} from "./Menu.styles";
import { MenuItemProps } from "./Menu.types";
import { SIDE_OFFSET } from "./Menu.constants";

function MenuContent({
  children,
  ...props
}: RadixMenu.DropdownMenuContentProps) {
  return (
    <RadixMenu.Portal>
      <StyledMenuContent sideOffset={SIDE_OFFSET} {...props}>
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
      <StyledMenuSubContent sideOffset={SIDE_OFFSET} {...props}>
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

function MenuItemLeftSlot({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function MenuItemRightSlot({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function MenuItemContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function MenuItem({ children, ...props }: MenuItemProps) {
  return <StyledMenuItem {...props}>{children}</StyledMenuItem>;
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
  MenuItemLeftSlot,
  MenuItemRightSlot,
  MenuSub,
  MenuSubTrigger,
};
