import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import clsx from "classnames";

import "overlayscrollbars/overlayscrollbars.css";
import "./styles.css";

import { ScrollAreaProps } from "./ScrollArea.types";

function ScrollArea({
  children,
  options,
  size = "md",
  ...rest
}: ScrollAreaProps) {
  const defaultOptions: Pick<ScrollAreaProps, "options"> = {
    options: {
      scrollbars: {
        theme: "ads-v2-scroll-theme",
        autoHide: "scroll",
      },
      ...options,
    },
  };
  return (
    <OverlayScrollbarsComponent
      className={clsx({
        "scroll-sm": size === "sm",
      })}
      defer
      options={defaultOptions.options}
      {...rest}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
