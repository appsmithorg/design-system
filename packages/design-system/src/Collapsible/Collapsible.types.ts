import { TextProps } from "Text";

export type CollapsibleProps = {
  /** The title of the collapsible component. */
  title: string;
  /** The content to be displayed when the component is expanded. */
  children: React.ReactNode;
  /**
   * Whether the component is initially expanded or collapsed.
   * Defaults to true.
   */
  isOpen?: boolean;
  /** Callback function to be called when the component is expanded or collapsed. */
  onHeaderClick?: (isOpen: boolean) => void;
  /** Additional CSS classes for the collapsible container. */
  className?: string;
  /** Whether to show the icon or not. */
  showIcon?: boolean;
  /**
   * The name of the custom icon to be displayed on the left side of the title.
   * Defaults to the arrow-down-s-line and arrow-up-s-line icons.
   */
  leftIcon?: string;
  /** The name of the icon to be displayed on the right side of the title. */
  rightIcon?: string;
  /** Additional properties for customizing the header text. */
  headerProps?: TextProps;
};
