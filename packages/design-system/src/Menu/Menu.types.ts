import * as RadixMenu from "@radix-ui/react-dropdown-menu";

export type MenuItemProps = RadixMenu.DropdownMenuItemProps & {
  /** The icon to display before the menu item. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  startIcon?: React.ReactNode | "string";
  /** The icon to display after the menu item. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  endIcon?: React.ReactNode | "string";
};
