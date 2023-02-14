import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tabs, TabsList, Tab, TabPanel } from "./Tab";
import { TabPanelProps, TabProps, TabsListProps, TabsProps } from "./Tab.types";
import { Text } from "../Text";

export default {
  title: "Design System/Tab",
  component: Tabs,
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

// eslint-disable-next-line react/function-component-definition
const TabTemplate: ComponentStory<typeof Tab> = (args: TabProps) => {
  return (
    <Tabs>
      <TabsList>
        <Tab {...args} />
      </TabsList>
    </Tabs>
  );
};

export const TabExample = TabTemplate.bind({});
TabExample.storyName = "Tab";
TabExample.args = {
  children: "Account",
  value: "tab1",
};
TabExample.argTypes = {
  children: {
    description: "The label given to the tab",
    required: true,
  },
  value: {
    description:
      "A unique id given to the tab that must match with the corresponding Tab Panel.",
    required: true,
  },
};

// eslint-disable-next-line react/function-component-definition
const TabsListTemplate: ComponentStory<typeof TabsList> = (
  args: TabsListProps,
) => {
  return (
    <Tabs>
      <TabsList {...args}>
        <Tab value="t1">Account</Tab>
        <Tab value="t2">Password</Tab>
      </TabsList>
    </Tabs>
  );
};

export const TabsListExample = TabsListTemplate.bind({});
TabsListExample.storyName = "TabsList";
TabsListExample.parameters = {
  controls: { hideNoControlsWarning: true },
};

// eslint-disable-next-line react/function-component-definition
const TabPanelTemplate: ComponentStory<typeof TabPanel> = (
  args: TabPanelProps,
) => {
  return (
    <Tabs defaultValue="tabber1">
      <TabsList>
        <Tab value="tabber1">Account</Tab>
        <Tab value="tabber2">Password</Tab>
      </TabsList>
      <TabPanel value="tabber1" {...args} />
      <TabPanel value="tabber2" {...args} />
    </Tabs>
  );
};

export const TabPanelExample = TabPanelTemplate.bind({});
TabPanelExample.storyName = "TabPanel";
TabPanelExample.args = {
  children: (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text kind="heading-m">Welcome to the Appsmith Emporium!</Text>
      <Text kind="body-m">
        Peruse the wide variety of templates available that may cater to your
        interests, or build your own!
      </Text>
    </div>
  ),
};
TabPanelExample.argTypes = {
  children: {
    description:
      "The content that goes into the panel. Accepts any react node.",
    required: true,
  },
  value: {
    description:
      "A unique id given to the tab panel that must match with the corresponding tab.",
    required: true,
  },
};

// eslint-disable-next-line react/function-component-definition
const TabsTemplate: ComponentStory<typeof Tabs> = (args: TabsProps) => {
  return (
    <Tabs defaultValue="tab1" {...args}>
      <TabsList>
        <Tab value="tab1">Account</Tab>
        <Tab value="tab2">Password</Tab>
      </TabsList>
      <TabPanel className="TabsContent" value="tab1">
        <p className="Text">
          Make changes to your account here. Click save when you're done.
        </p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" defaultValue="Pedro Duarte" id="name" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" defaultValue="@peduarte" id="username" />
        </fieldset>
        <div>
          <button className="Button green">Save changes</button>
        </div>
      </TabPanel>
      <TabPanel className="TabsContent" value="tab2">
        <p className="Text">
          Change your password here. After saving, you'll be logged out.
        </p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="currentPassword">
            Current password
          </label>
          <input className="Input" id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="newPassword">
            New password
          </label>
          <input className="Input" id="newPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className="Input" id="confirmPassword" type="password" />
        </fieldset>
        <div>
          <button className="Button green">Change password</button>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export const TabsExample = TabsTemplate.bind({});
TabsExample.storyName = "Tabs";
TabsExample.args = {
  defaultValue: "tab1",
};
TabsExample.argTypes = {
  defaultValue: {
    description: "The value of the tab to select by default, if uncontrolled",
    control: {
      type: "radio",
      options: ["tab1", "tab2"],
    },
  },
  value: {
    description: "The value for the selected tab, if controlled",
    control: {
      type: "radio",
      options: ["tab1", "tab2"],
    },
  },
  orientation: {
    description:
      "The orientation the tabs are layed out. Mainly so arrow navigation is done accordingly (left & right vs. up & down). Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
    control: {
      type: "radio",
      options: ["horizontal", "vertical"],
    },
  },
  onValueChange: {
    description: "A function called when a new tab is selected",
  },
};
