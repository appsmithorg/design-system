import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { SegmentedControlProps } from "./SegmentedControl.types";
import { StyledSegmentedControl } from "./SegmentedControl.styles";

function SegmentedControl(props: SegmentedControlProps) {
  return <StyledSegmentedControl>hi</StyledSegmentedControl>;
}

SegmentedControl.displayName = "Segmented Control";

SegmentedControl.defaultProps = {};

export { SegmentedControl };
