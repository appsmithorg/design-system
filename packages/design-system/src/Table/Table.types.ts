import type { TableProps as RcTableProps } from "rc-table";
// Table props
export type TableProps = Omit<RcTableProps, "components" | "style">;
