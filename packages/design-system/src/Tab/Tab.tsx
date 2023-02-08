import React from "react";
import { TabProps } from "./Tab.types";
import {
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTabs,
} from "./Tab.styles";

import {
  AriaTabListProps,
  AriaTabPanelProps,
  AriaTabProps,
  useTab,
  useTabList,
  useTabPanel,
} from "@react-aria/tabs";
import { useTabListState } from "@react-stately/tabs";
import { Text } from "../Text";

/*
  TODO:
  - Write the story to be usable
  - Add badge
  - Animation of active state
  - decouple Tab from Item
 */

function Tabs(props: AriaTabListProps<AriaTabProps>) {
  let state = useTabListState(props);
  let ref = React.useRef<HTMLDivElement>(null);
  let { tabListProps } = useTabList(props, state, ref);
  return (
    <StyledTabs>
      <StyledTabList {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab
            key={item.key}
            item={item}
            state={state}
            orientation={props.orientation}
          />
        ))}
      </StyledTabList>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </StyledTabs>
  );
}

function Tab({ item, state, orientation }: AriaTabProps) {
  let { key, rendered } = item;
  let ref = React.useRef<HTMLDivElement>(null);
  let { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);
  return (
    <StyledTab {...tabProps} ref={ref}>
      <Text>{rendered}</Text>
    </StyledTab>
  );
}

function TabPanel({ state, ...props }: AriaTabPanelProps) {
  let ref = React.useRef<HTMLDivElement>(null);
  let { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <StyledTabPanel {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </StyledTabPanel>
  );
}

Tab.displayName = "Tab";

Tab.defaultProps = {};

export { Tab, Tabs, TabPanel };
