// Button types
export type Category = "primary" | "secondary" | "tertiary";

// Button sizes
export type Size = "sm" | "md" | "lg";

// Button variants
export type Variant = "success" | "default" | "warning" | "danger";

// Button props
export type ButtonProps = {
  /** Button category attribute */
  category?: Category;
  /** Button size attribute */
  size?: Size;
  /** Button variant attribute */
  variant?: Variant;
  /** Button loading attribute */
  isLoading?: boolean;
  /** Button as attribute */
  as?: "button" | "a";
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;