export type CollapsibleProps = {
  /**
   * Both header and content of the collapsible will go here.
   */
  children: React.ReactNode;
  /** The open state of the collapsible. */
  isOpen: boolean;
  /** Callback for when the collapsible is opened or closed. */
  onOpenChange?: (isOpen: boolean) => void;
  /* (try not to) pass addition classes here */
  className?: string;
};

export type CollapsibleContentProps = {
  /** Content to be displayed when the component is expanded. */
  children: React.ReactNode;
};

export type CollapsibleHeaderProps = {
  /**
   * Any React Node that will go in the header.
   * Clicking on this will toggle the collapsible.
   */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export type CollapsibleContextType = {
  isExpanded: boolean;
  onOpenChange?: () => void;
};
