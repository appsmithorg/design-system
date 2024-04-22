import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import clsx from "classnames";

import "overlayscrollbars/overlayscrollbars.css";
import "./styles.css";

import { ScrollbarProps } from "./Scrollbar.types";

function Scrollbar({ children, size = "md", ...rest }: ScrollbarProps) {
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

Scrollbar.displayName = "Scrollbar";

export { Scrollbar };
