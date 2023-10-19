import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

export default {
  title: "Design System/Table",
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const TableStory: Story = {
  name: "Table",
  args: {},
  render: (args) => <Table {...args}>content</Table>,
};
