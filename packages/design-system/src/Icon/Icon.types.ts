export type IconProps = {
  /** name of the icon from remix icon library */
  name?: string;
  /** size of the icon - this is a css unit */
  size?: string;
  /** color of the icon */
  color?: string;
  /** class name to be applied to the icon */
  className?: string;
  /** custom Svg */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;
