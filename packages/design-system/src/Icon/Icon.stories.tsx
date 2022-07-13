import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import IconComponent, { IconSize, IconCollection } from "./index";

export default {
  title: "Design System/Icon",
  component: IconComponent,
  argTypes: {
    size: {
      control: "select",
      options: [
        IconSize.XXS,
        IconSize.XS,
        IconSize.SMALL,
        IconSize.MEDIUM,
        IconSize.LARGE,
        IconSize.XL,
        IconSize.XXL,
        IconSize.XXXL,
        IconSize.XXXXL,
      ],
    },
    name: {
      control: "select",
      options: IconCollection,
    },
  },
} as ComponentMeta<typeof IconComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
);

export const Icon = Template.bind({});

Icon.args = {
  name: "filter",
  size: IconSize.XXXXL,
  fillColor: "gray",
};
