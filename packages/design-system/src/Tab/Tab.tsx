import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { StyledTab, StyledTabPanel, StyledTabsList } from "./Tab.styles";

import * as RadixTabs from "@radix-ui/react-tabs";

import { Text } from "../Text";
import { TabPanelProps, TabProps, TabsListProps, TabsProps } from "./Tab.types";

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
    </StyledTab>
  );
}

function TabPanel(props: TabPanelProps) {
  return <StyledTabPanel value={props.value}>{props.children}</StyledTabPanel>;
}
export { Tabs, TabsList, Tab, TabPanel };
