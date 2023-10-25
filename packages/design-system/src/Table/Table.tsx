import React from "react";
import RcTable from "rc-table";
import clsx from "classnames";

import "rc-table/assets/index.css";
import "./reset.css";

import { TableProps } from "./Table.types";
import {
  StyledBody,
  StyledCell,
  StyledHeader,
  StyledHeaderCell,
  StyledHeaderRow,
  StyledRow,
  StyledTable,
} from "./Table.styles";
import { TableWrapperClassName } from "./Table.constants";
import { Icon } from "Icon";
import { Text } from "Text";
import { Flex } from "Flex";

function Table({ className, emptyText = NoData, ...props }: TableProps) {
  const components = {
    table: StyledTable,
    header: {
      wrapper: StyledHeader,
      row: StyledHeaderRow,
      cell: StyledHeaderCell,
    },
    body: {
      wrapper: StyledBody,
      row: StyledRow,
      cell: StyledCell,
    },
  };
  return (
    <RcTable<any>
      {...props}
      className={clsx(TableWrapperClassName, className)}
      components={components}
      emptyText={emptyText}
    />
  );
}

Table.displayName = "Table";

function NoData() {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      gap={"spaces-2"}
      justifyContent={"center"}
    >
      <Icon name="search-line" size="lg" />
      <Text>No data found</Text>
    </Flex>
  );
}

export { Table };
