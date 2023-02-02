import React from "react";
import RCTooltip from "rc-tooltip";

import { TooltipProps } from "./Tooltip.types";
import "rc-tooltip/assets/bootstrap.css";
import "./Tooltip.css";
import { TooltipClassName } from "./Tooltip.constants";

function Tooltip(props: TooltipProps) {
  const { children, content, ...rest } = props;
  return (
    <RCTooltip overlay={content} overlayClassName={TooltipClassName} {...rest}>
      {children}
    </RCTooltip>
  );
}

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {
  placement: "top",
  trigger: ["hover"],
  showArrow: true,
};

export { Tooltip };
