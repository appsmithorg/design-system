import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { Sizes } from "__config__/types";

export type MenuSizes = Extract<Sizes, "sm" | "md">;

type _MenuContentProps = {
  /**height of the menu */
  height?: string;
  /** width of the menu */
  width?: string;
  /** portal props */
  portalProps?: RadixMenu.DropdownMenuPortalProps;
};
export type MenuContentProps = _MenuContentProps &
  RadixMenu.DropdownMenuContentProps;
export type MenuSubContentProps = _MenuContentProps &
  RadixMenu.DropdownMenuSubContentProps;

type _MenuItemProps = {
  /** startIcon */
  startIcon?: string;
  /** endIcon */
  endIcon?: string;
  /** size of the menu item. */
  size?: MenuSizes;
};
export type MenuItemProps = RadixMenu.DropdownMenuItemProps & _MenuItemProps;
export type MenuSubTriggerProps = Omit<_MenuItemProps, "endIcon"> &
  RadixMenu.DropdownMenuSubTriggerProps;

export type MenuItemContentProps = Pick<
  MenuItemProps,
  "children" | "startIcon" | "endIcon" | "size"
>;
