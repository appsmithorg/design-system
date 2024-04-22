import { OverlayScrollbarsComponentProps } from "overlayscrollbars-react";

import { Sizes } from "__config__/types";

// Scrollbar props
export interface ScrollbarProps extends OverlayScrollbarsComponentProps {
  size?: Extract<Sizes, "sm" | "md">;
}
