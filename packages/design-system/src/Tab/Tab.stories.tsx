import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tabs, TabsList, Tab, TabPanel } from "./Tab";
import * as RadixTabs from "@radix-ui/react-tabs";
// import "./styles.css";

export default {
  title: "Design System/Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

// eslint-disable-next-line react/function-component-definition
// const Template: ComponentStory<typeof Tab> = (args) => {
//   return <Tab {...args} />;
// };

export function TabsDemo() {
  return (
    <Tabs className="TabsRoot" defaultValue="tab1">
      <TabsList aria-label="Manage your account" className="TabsList">
        <Tab className="TabsTrigger" value="tab1">
          Account
        </Tab>
        <Tab className="TabsTrigger" value="tab2">
          Password
        </Tab>
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
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
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
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Change password</button>
        </div>
      </TabPanel>
    </Tabs>
  );
}
export function RadixTabsDemo() {
  return (
    <RadixTabs.Root className="TabsRoot" defaultValue="tab1">
      <RadixTabs.List aria-label="Manage your account" className="TabsList">
        <RadixTabs.Trigger className="TabsTrigger" value="tab1">
          Account
        </RadixTabs.Trigger>
        <RadixTabs.Trigger className="TabsTrigger" value="tab2">
          Password
        </RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content className="TabsContent" value="tab1">
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
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Save changes</button>
        </div>
      </RadixTabs.Content>
      <RadixTabs.Content className="TabsContent" value="tab2">
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
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Change password</button>
        </div>
      </RadixTabs.Content>
    </RadixTabs.Root>
  );
}

// export const TabStory = Template.bind({});
// TabStory.storyName = "Tab";
// TabStory.args = {
//   add arguments here
// };
