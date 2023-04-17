import type { TooltipProps as RcTooltipProps } from "rc-tooltip/lib/Tooltip";

export type TooltipPlacement =
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
  content: string | React.ReactNode;
  /** Tooltip placement */
  placement?: TooltipPlacement;
} & Omit<
  RcTooltipProps,
  | "overlayStyle"
  | "prefixCls"
  | "overlayClassName"
  | "overlayInnerStyle"
  | "overlay"
>;
