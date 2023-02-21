import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "./Menu";
import { Button } from "../Button";
import { Text } from "../Text";

export default {
  title: "Design System/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Menu> = () => {
  return (
    <Menu defaultOpen>
      <MenuTrigger>
        <Button>Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <Text>Item 1</Text>
        </MenuItem>
        <MenuItem>
          <Text>Item 2</Text>
        </MenuItem>
        <MenuItem>
          <Text>Item 3</Text>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>
            <Text>Sub Menu</Text>
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>
              <Text>Sub Item 1</Text>
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger>
                <Text>Sub Menu 2</Text>
              </MenuSubTrigger>
              <MenuSubContent>
                <MenuItem>
                  <Text>Sub Item 2.1</Text>
                </MenuItem>
                <MenuItem>
                  <Text>Sub Item 2.2</Text>
                </MenuItem>
                <MenuItem>
                  <Text>Sub Item 2.3</Text>
                </MenuItem>
              </MenuSubContent>
            </MenuSub>
          </MenuSubContent>
        </MenuSub>
      </MenuContent>
    </Menu>
  );
};

export const MenuStory = Template.bind({});
MenuStory.storyName = "Menu";
MenuStory.args = {};
