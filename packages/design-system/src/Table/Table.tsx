import React from "react";

import { TableProps } from "./Table.types";
import { StyledTable } from "./Table.styles";

function Table({ children, ...rest }: TableProps) {
  return <StyledTable {...rest}>{children}</StyledTable>;
}

Table.displayName = "Table";

export { Table };
