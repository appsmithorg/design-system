import type { TooltipProps as RcTooltipProps } from "rc-tooltip/lib/Tooltip";

type Placement =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "rightTop"
  | "rightBottom"
  | "leftTop"
  | "leftBottom";

// Tooltip props
export type TooltipProps = {
  /** Tooltip content to be shown */
  content: (() => React.ReactNode) | React.ReactNode;
  /** Tooltip placement */
  placement?: Placement;
} & Omit<
  RcTooltipProps,
  | "overlayStyle"
  | "prefixCls"
  | "overlayClassName"
  | "overlayInnerStyle"
  | "overlay"
>;
