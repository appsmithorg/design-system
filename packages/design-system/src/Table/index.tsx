import { useTable, useSortBy } from "react-table";
import React from "react";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "../assets/icons/ads/down_arrow.svg";
import { ReactComponent as UpperArrow } from "../assets/icons/ads/upper_arrow.svg";
import { Classes } from "Constants/classes";
import { typography } from "Constants/typography";

const Styles = styled.div`
  table {
    border-spacing: 0;
    width: 100%;

    thead {
      tr {
        background-color: var(--ads-table-table-row-background-color);

        th {
          padding: var(--ads-spaces-5) var(--ads-spaces-9);
          text-align: left;
          color: var(--ads-table-table-header-text-color);
          font-weight: ${typography.h6.fontWeight};
          font-size: ${typography.h6.fontSize};
          line-height: ${typography.h6.lineHeight};
          letter-spacing: ${typography.h6.letterSpacing};

          svg {
            margin-left: var(--ads-spaces-2);
            margin-bottom: calc(var(--ads-spaces-0) + 1px);
          }

          &:hover {
            color: var(--ads-table-table-header-hover-text-color);
            cursor: pointer;
            svg {
              path {
                fill: var(--ads-table-table-header-hover-icon-path-color);
              }
            }
          }
        }
      }
    }

    tbody {
      tr {
        td:first-child {
          color: var(--ads-table-table-row-first-table-data-default-text-color);
          font-weight: var(--ads-font-weight-normal);
        }

        td {
          padding: var(--ads-spaces-4) var(--ads-spaces-9);
          color: var(--ads-table-table-row-table-data-default-text-color);
          font-size: ${typography.p1.fontSize};
          line-height: ${typography.p1.lineHeight};
          letter-spacing: ${typography.p1.letterSpacing};
          font-weight: normal;
          border-bottom: 1px solid
            var(--ads-table-table-row-table-data-border-bottom-color);
        }

        &:hover {
          background-color: var(--ads-table-table-row-hover-background-color);
          .${Classes.ICON} {
            path {
              fill: var(--ads-table-table-row-hover-icon-path-color);
            }
          }
          td:first-child {
            color: var(--ads-table-table-row-first-table-data-hover-text-color);
          }
          td {
            color: var(--ads-table-table-row-table-data-hover-text-color);
          }
        }
      }
    }
  }
`;

const HiddenArrow = styled(DownArrow)`
  visibility: hidden;
`;
export interface TableProps {
  data: any[];
  columns: any[];
}

function Table(props: TableProps) {
  const { columns, data } = props;

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index: number) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index: number) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index}
                >
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <UpperArrow />
                    ) : (
                      <DownArrow />
                    )
                  ) : (
                    <HiddenArrow />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index: number) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      data-colindex={index}
                      key={index}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
}

export default Table;
