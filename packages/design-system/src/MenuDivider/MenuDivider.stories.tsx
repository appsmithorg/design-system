import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import MenuDivider from "./index";
import Text, { TextType } from "../Text";
import Box from "../Box";

export default {
  title: "Design System/Menu Divider",
  component: MenuDivider,
} as ComponentMeta<typeof MenuDivider>;

export const MenuDividerDefault = () => (
  <Box direction="vertical" space="var(--ads-spaces-7)">
    <Text type={TextType.P1}>Privacy Policy</Text>
    <MenuDivider fullWidth />
    <Text type={TextType.P1}>Terms and Conditions</Text>
  </Box>
);

export const MenuDividerVertical = () => (
  <Box space="var(--ads-spaces-7)">
    <Text type={TextType.P1}>Privacy Policy</Text>
    <MenuDivider direction="vertical" fullWidth />
    <Text type={TextType.P1}>Terms and Conditions</Text>
  </Box>
);
