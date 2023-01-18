import React from "react";
import { TabProps } from "./Tab.types";
import { StyledTab, StyledTabList, StyledTabs } from "./Tab.styles";

import { useTab, useTabList, useTabPanel } from "@react-aria/tabs";
import { useTabListState } from "@react-stately/tabs";

/*
  TODO:
  - Add icon
  - Add badge
  - Animation of active state
  - Focus ring to activate only on navigation via keyboard
  - decouple Tab from Item
 */

function Tabs(props) {
  let state = useTabListState(props);
  // efObject<HTMLElement
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

function Tab({ item, state, orientation }) {
  let { key, rendered } = item;
  let ref = React.useRef<HTMLDivElement>(null);
  let { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);
  return (
    <StyledTab {...tabProps} ref={ref}>
      {rendered}
    </StyledTab>
  );
}

function TabPanel({ state, ...props }) {
  let ref = React.useRef<HTMLDivElement>(null);
  let { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}

// const Tab = ({ YOUR_PROPS, children, ...rest }: TabProps) => {
//   return (
//     <StyledTab {...rest}>
//       {children}
//     </StyledTab>
//   );
// };

Tab.displayName = "Tab";

Tab.defaultProps = {};

export { Tab, Tabs, TabPanel };
