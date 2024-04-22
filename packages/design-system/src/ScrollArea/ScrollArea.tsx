import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import clsx from "classnames";

import "overlayscrollbars/overlayscrollbars.css";
import "./styles.css";

import { ScrollAreaProps } from "./ScrollArea.types";

function ScrollArea({ children, size = "md", ...rest }: ScrollAreaProps) {
  return (
    <OverlayScrollbarsComponent
      className={clsx({
        "scroll-sm": size === "sm",
      })}
      defer
      options={{
        scrollbars: {
          theme: "ads-v2-scroll-theme",
          autoHide: "scroll",
        },
      }}
      {...rest}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
