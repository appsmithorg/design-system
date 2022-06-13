import React, { useMemo } from "react";
import { CommonComponentProps } from "../types/common";
import { Position, Tooltip, PopperBoundary } from "@blueprintjs/core";
import { Modifiers } from "popper.js";
import { noop } from "lodash";
import "./styles.module.css";

type Variant = "dark" | "light";

export const GLOBAL_STYLE_TOOLTIP_CLASSNAME = "ads-global-tooltip";

export type TooltipProps = CommonComponentProps & {
  content: JSX.Element | string;
  disabled?: boolean;
  position?: Position;
  children: JSX.Element;
  variant?: Variant;
  maxWidth?: string;
  boundary?: PopperBoundary;
  minWidth?: string;
  openOnTargetFocus?: boolean;
  autoFocus?: boolean;
  hoverOpenDelay?: number;
  minimal?: boolean;
  modifiers?: Modifiers;
  isOpen?: boolean;
  onOpening?: typeof noop;
  popoverClassName?: string;
  donotUsePortal?: boolean;
  transitionDuration?: number;
};

const rootElementId = "tooltip-root";

let portalContainer = document.getElementById(rootElementId);

if (!portalContainer) {
  const tooltipPortalElement = document.createElement("div");
  tooltipPortalElement.id = rootElementId;
  document.body.append(tooltipPortalElement);
  portalContainer = document.getElementById(rootElementId);
}

function TooltipComponent(props: TooltipProps) {
  const modifiers = useMemo(
    () => ({
      preventOverflow: { enabled: false },
      ...props.modifiers,
    }),
    [props.modifiers],
  );

  return (
    // @ts-expect-error: Tooltip type miss match
    <Tooltip
      autoFocus={props.autoFocus}
      boundary={props.boundary || "scrollParent"}
      className={props.className}
      content={props.content}
      disabled={props.disabled}
      hoverOpenDelay={props.hoverOpenDelay}
      isOpen={props.isOpen}
      minimal={props.minimal}
      modifiers={modifiers}
      onOpening={props.onOpening}
      openOnTargetFocus={props.openOnTargetFocus}
      popoverClassName={`${GLOBAL_STYLE_TOOLTIP_CLASSNAME} ${props.popoverClassName ??
        ""}`}
      portalContainer={portalContainer as HTMLDivElement}
      position={props.position}
      transitionDuration={props.transitionDuration || 0}
      usePortal={!props.donotUsePortal}
    >
      {props.children}
    </Tooltip>
  );
}

TooltipComponent.defaultProps = {
  position: Position.TOP,
  variant: "dark",
};

export default TooltipComponent;
