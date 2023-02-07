import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tabs } from "./Tab";
import { Item } from "@react-stately/collections";
import { Text } from "../Text";

export default {
  title: "Design System/Tab",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// eslint-disable-next-line react/function-component-definition
// const Template: ComponentStory<typeof Tab> = (args) => {
//   return <Tab {...args} />;
// };
//
// export const TabExample = Template.bind({});
// TabExample.storyName = "Tab";
// TabExample.args = {
//   //add arguments here
// };

export const TabExample = () => {
  return (
    <Tabs aria-label="History of Ancient Rome">
      <Item key="FoR" title="Founding of Rome">
        <Text>Arma virumque cano, Troiae qui primus ab oris.</Text>
      </Item>
      <Item key="MaR" title="Monarchy and Republic">
        <Text>Senatus Populusque Romanus.</Text>
      </Item>
      <Item key="Emp" title="Empire">
        <Text>Alea jacta est.</Text>
      </Item>
    </Tabs>
  );
};
