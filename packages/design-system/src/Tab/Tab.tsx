import React from "react";
import { useFocusRing } from "@react-aria/focus";

import { StyledTab, StyledTabsList } from "./Tab.styles";

import * as RadixTabs from "@radix-ui/react-tabs";
import {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from "@radix-ui/react-tabs";

import { Text } from "../Text";

function Tabs(props: TabsProps) {
  return (
    <RadixTabs.Root defaultValue={props.defaultValue}>
      {props.children}
    </RadixTabs.Root>
  );
}

function TabsList(props: TabsListProps) {
  return <StyledTabsList>{props.children}</StyledTabsList>;
}

function Tab(props: TabsTriggerProps) {
  return (
    <StyledTab value={props.value}>
      <Text color="inherit" kind="action-m">
        {props.children}
      </Text>
    </StyledTab>
  );
}

function TabPanel(props: TabsContentProps) {
  return (
    <RadixTabs.Content value={props.value}>{props.children}</RadixTabs.Content>
  );
}
export { Tabs, TabsList, Tab, TabPanel };
