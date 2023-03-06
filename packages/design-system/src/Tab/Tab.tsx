import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { StyledTab, StyledTabPanel, StyledTabsList } from "./Tab.styles";

import * as RadixTabs from "@radix-ui/react-tabs";

import { Text } from "../Text";
import { TabPanelProps, TabProps, TabsListProps, TabsProps } from "./Tab.types";
import { Tag } from "../Tag";

/* TODO
- border styles using ::before
- vertical tabs
- focus styles
 */

function Tabs(props: TabsProps) {
  return (
    <RadixTabs.Root defaultValue={props.defaultValue} {...props}>
      {props.children}
    </RadixTabs.Root>
  );
}

function TabsList(props: TabsListProps) {
  return <StyledTabsList loop>{props.children}</StyledTabsList>;
}

function Tab(props: TabProps) {
  return (
    <StyledTab value={props.value}>
      <Text color="inherit" kind="action-m">
        {props.children}
      </Text>
      {props.notificationCount && (
        <Tag isClosable={false}>
          {props.notificationCount != 0 && props.notificationCount > 9
            ? "9+"
            : props.notificationCount}
        </Tag>
      )}
    </StyledTab>
  );
}

function TabPanel(props: TabPanelProps) {
  return <StyledTabPanel value={props.value}>{props.children}</StyledTabPanel>;
}
export { Tabs, TabsList, Tab, TabPanel };
