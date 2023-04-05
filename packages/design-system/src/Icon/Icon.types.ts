import { Sizes } from "__config__/types";
import { IconNames } from "./Icon.provider";

export type IconSizes = Extract<Sizes, "sm" | "md" | "lg">;

export type IconProps = {
  // TODO: Change this type to icon names that are exposed and not string
  /** name of the icon from remix icon library */
  name?: IconNames;
  /** size of the icon - sm,md,lg,xl, xxl */
  size?: IconSizes;
  /** color of the icon */
  color?: string;
  /** class name to be applied to the icon */
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export { IconNames };
