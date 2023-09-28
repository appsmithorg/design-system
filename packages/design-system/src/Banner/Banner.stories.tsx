import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Banner } from "./Banner";

export default {
  title: "Design System/Banner",
  component: Banner,
} as Meta<typeof Banner>;

// eslint-disable-next-line react/function-component-definition
type Story = StoryObj<typeof Banner>;

export const BannerStory: Story = {
  name: "Banner",
  render: () => (
    <Banner
      isClosable
      link={{
        to: "/",
        children: "Home",
      }}
    >
      There are many variations of passages of Lorem Ipsum available.
    </Banner>
  ),
};
