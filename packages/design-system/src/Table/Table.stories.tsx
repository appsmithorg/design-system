/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";
import { Tooltip } from "../Tooltip";

export default {
  title: "Design System/Table",
  component: Table,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "60%",
          height: "50vh",
          overflow: "scroll",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const TableStory: Story = {
  name: "Table",
  args: {
    columns: [
      {
        title: "Column 1",
        dataIndex: "col1",
        width: 100,
      },
      {
        title: "Column 2",
        dataIndex: "col2",
        width: 100,
      },
      {
        title: "Column 3",
        dataIndex: "col3",
        width: 100,
      },
      {
        title: "Column 4",
        dataIndex: "col4",
        width: 100,
      },
      {
        title: "Column 5",
        dataIndex: "col5",
        width: 100,
      },
      {
        title: "Column 6",
        dataIndex: "col6",
        width: 100,
        ellipsis: {
          showTitle: false,
        },
        render: (value: string) => (
          <Tooltip content={value} placement="topLeft">
            <span>{value}</span>
          </Tooltip>
        ),
      },
      {
        title: "Column 7",
        dataIndex: "col7",
        width: 100,
      },
    ],
    data: [
      {
        col1: "Row 1, Column 1",
        col2: "Row 1, Column 2",
        col3: "Row 1, Column 3",
        col4: "Row 1, Column 4",
        col5: "Row 1, Column 5",
        col6: "Row 1, Column 6, Row 1, Column 6, Row 1, Column 6, Row 1, Column 6, Row 1, Column 6",
        col7: "Row 1, Column 7",
        col8: "Row 1, Column 8",
        col9: "Row 1, Column 9",
        col10: "Row 1, Column 10",
      },
      {
        col1: "Row 2, Column 1",
        col2: "Row 2, Column 2",
        col3: "Row 2, Column 3",
        col4: "Row 2, Column 4",
        col5: "Row 2, Column 5",
        col6: "Row 2, Column 6",
        col7: "Row 2, Column 7",
        col8: "Row 2, Column 8",
        col9: "Row 2, Column 9",
        col10: "Row 2, Column 10",
      },
      {
        col1: "Row 3, Column 1",
        col2: "Row 3, Column 2",
        col3: "Row 3, Column 3",
        col4: "Row 3, Column 4",
        col5: "Row 3, Column 5",
        col6: "Row 3, Column 6",
        col7: "Row 3, Column 7",
        col8: "Row 3, Column 8",
        col9: "Row 3, Column 9",
        col10: "Row 3, Column 10",
      },
      {
        col1: "Row 4, Column 1",
        col2: "Row 4, Column 2",
        col3: "Row 4, Column 3",
        col4: "Row 4, Column 4",
        col5: "Row 4, Column 5",
        col6: "Row 4, Column 6",
        col7: "Row 4, Column 7",
        col8: "Row 4, Column 8",
        col9: "Row 4, Column 9",
        col10: "Row 4, Column 10",
      },
      {
        col1: "Row 5, Column 1",
        col2: "Row 5, Column 2",
        col3: "Row 5, Column 3",
        col4: "Row 5, Column 4",
        col5: "Row 5, Column 5",
        col6: "Row 5, Column 6",
        col7: "Row 5, Column 7",
        col8: "Row 5, Column 8",
        col9: "Row 5, Column 9",
        col10: "Row 5, Column 10",
      },
      {
        col1: "Row 6, Column 1",
        col2: "Row 6, Column 2",
        col3: "Row 6, Column 3",
        col4: "Row 6, Column 4",
        col5: "Row 6, Column 5",
        col6: "Row 6, Column 6",
        col7: "Row 6, Column 7",
        col8: "Row 6, Column 8",
        col9: "Row 6, Column 9",
        col10: "Row 6, Column 10",
      },
      {
        col1: "Row 7, Column 1",
        col2: "Row 7, Column 2",
        col3: "Row 7, Column 3",
        col4: "Row 7, Column 4",
        col5: "Row 7, Column 5",
        col6: "Row 7, Column 6",
        col7: "Row 7, Column 7",
        col8: "Row 7, Column 8",
        col9: "Row 7, Column 9",
        col10: "Row 7, Column 10",
      },
      {
        col1: "Row 8, Column 1",
        col2: "Row 8, Column 2",
        col3: "Row 8, Column 3",
        col4: "Row 8, Column 4",
        col5: "Row 8, Column 5",
        col6: "Row 8, Column 6",
        col7: "Row 8, Column 7",
        col8: "Row 8, Column 8",
        col9: "Row 8, Column 9",
        col10: "Row 8, Column 10",
      },
      {
        col1: "Row 9, Column 1",
        col2: "Row 9, Column 2",
        col3: "Row 9, Column 3",
        col4: "Row 9, Column 4",
        col5: "Row 9, Column 5",
        col6: "Row 9, Column 6",
        col7: "Row 9, Column 7",
        col8: "Row 9, Column 8",
        col9: "Row 9, Column 9",
        col10: "Row 9, Column 10",
      },
      {
        col1: "Row 10, Column 1",
        col2: "Row 10, Column 2",
        col3: "Row 10, Column 3",
        col4: "Row 10, Column 4",
        col5: "Row 10, Column 5",
        col6: "Row 10, Column 6",
        col7: "Row 10, Column 7",
        col8: "Row 10, Column 8",
        col9: "Row 10, Column 9",
        col10: "Row 10, Column 10",
      },
    ],
    sticky: true,
  },
  render: (args) => <Table {...args} />,
};
