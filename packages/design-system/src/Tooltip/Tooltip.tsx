import React from "react";
import RCTooltip from "rc-tooltip";

import { TooltipProps } from "./Tooltip.types";
// import { StyledTooltip } from "./Tooltip.styles";
import "rc-tooltip/assets/bootstrap.css";

function Tooltip(props: TooltipProps) {
  return (
    <RCTooltip
      overlay={<span>tooltip</span>}
      overlayClassName="rc-tooltip-abt-test"
      placement="topRight"
      trigger={["click"]}
    >
      <a href="#">hover</a>
    </RCTooltip>
  );
}

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {};

export { Tooltip };
