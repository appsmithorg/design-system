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

function Table({ className, ...props }: TableProps) {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <RcTable
      {...props}
      className={clsx(TableWrapperClassName, className)}
      components={components}
    />
  );
}

Table.displayName = "Table";

export { Table };
