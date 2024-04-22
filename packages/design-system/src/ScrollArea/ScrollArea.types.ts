import { OverlayScrollbarsComponentProps } from "overlayscrollbars-react";

import { Sizes } from "__config__/types";

// ScrollArea props
export interface ScrollAreaProps extends OverlayScrollbarsComponentProps {
  size?: Extract<Sizes, "sm" | "md">;
}
