import { Sizes } from "__config__/types";

export type IconSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type IconProps = {
  /** name of the icon from remix icon library */
  name?: string;
  /** size of the icon - sm,md,lg,xl */
  size: IconSizes;
  /** color of the icon */
  color?: string;
  /** class name to be applied to the icon */
  className?: string;
  /** custom Svg */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;
