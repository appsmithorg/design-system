import type { TooltipProps as RcTooltipProps } from "rc-tooltip/lib/Tooltip";

export type TooltipPlacement =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "right-top"
  | "right-bottom"
  | "left-top"
  | "left-bottom";

// Tooltip props
export type TooltipProps = {
  /** Tooltip content to be shown */
  content: string;
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
