// Button types
export type Kind = "primary" | "secondary" | "tertiary" | "error";

// Button sizes
export type Size = "sm" | "md" | "lg";

// Button props
export type ButtonProps = {

  /** Button as attribute */
  as?: "button" | "a";
  /** Button loading attribute */
  isLoading?: boolean;
  /** Button kind attribute */
  kind?: Kind;
  /** Button size attribute */
  size?: Size;
  /** Button startIcon attribute */
  startIcon?: React.ReactNode | "string";
  /** Button endIcon attribute */
  endIcon?: React.ReactNode | "string";

} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;