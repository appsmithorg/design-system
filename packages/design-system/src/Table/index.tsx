import { useTable, useSortBy } from "react-table";
import React from "react";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "../assets/icons/ads/down_arrow.svg";
import { ReactComponent as UpperArrow } from "../assets/icons/ads/upper_arrow.svg";
import { Classes } from "Constants/classes";
import { typography } from "Constants/typography";
import Spinner from "Spinner";
import { IconSize } from "Icon";

const Styles = styled.div`
  table {
    border-spacing: 0;
    width: 100%;

    thead {
      position: sticky;
      top: 0;

      tr {
        background-color: var(--ads-table-table-row-background-color);

        th {
          padding: var(--ads-spaces-5) var(--ads-spaces-9);
          text-align: left;
          color: var(--ads-table-table-header-text-color);
          font-weight: ${typography.h6.fontWeight};
          font-size: ${typography.h6.fontSize}px;
          line-height: ${typography.h6.lineHeight}px;
          letter-spacing: ${typography.h6.letterSpacing}px;
          border-bottom: 1px solid var(--ads-color-black-200);

          svg {
            margin-left: var(--ads-spaces-2);
            margin-bottom: calc(var(--ads-spaces-0) + 1px);
            width: 6px;
            height: 4px;
            display: initial;
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
        td {
          padding: var(--ads-spaces-4) var(--ads-spaces-9);
          color: var(--ads-table-table-row-table-data-default-text-color);
          font-size: ${typography.p1.fontSize}px;
          line-height: ${typography.p1.lineHeight}px;
          letter-spacing: ${typography.p1.letterSpacing}px;
          font-weight: normal;
          border-bottom: 1px solid
            var(--ads-table-table-row-table-data-border-bottom-color);

          &:first-child {
            color: var(
              --ads-table-table-row-first-table-data-default-text-color
            );
            font-weight: var(--ads-font-weight-normal);
          }

          &.no-border {
            border: none;

            .no-data-title {
              color: var(--ads-table-table-row-table-data-default-text-color);
            }
          }
        }

        &:hover {
          background-color: var(--ads-table-table-row-hover-background-color);
          .${Classes.ICON} {
            path {
              fill: var(--ads-table-table-row-hover-icon-path-color);
            }
          }
          td {
            color: var(--ads-table-table-row-table-data-hover-text-color);

            &:first-child {
              color: var(
                --ads-table-table-row-first-table-data-hover-text-color
              );
            }
            &.no-border {
              background-color: var(--ads-color-black-0);
            }
          }
        }
      }
    }
  }
`;

const HiddenArrow = styled(DownArrow)`
  visibility: hidden;
`;

const CentralizedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
`;

const TableColumnEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 156px;
    margin-top: 16px;
  }
  .no-data-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin-top: 23px;
  }
`;
export interface TableProps {
  data: any[];
  columns: any[];
  isLoading?: boolean;
  loaderComponent?: JSX.Element;
  noDataComponent?: JSX.Element;
}

function Table(props: TableProps) {
  const {
    columns,
    data,
    isLoading = false,
    loaderComponent,
    noDataComponent,
  } = props;

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
                  {...column.getHeaderProps(
                    column.getSortByToggleProps({ title: undefined }),
                  )}
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
          {isLoading ? (
            <tr>
              <td className="no-border" colSpan={columns?.length}>
                <CentralizedWrapper>
                  {loaderComponent ? (
                    loaderComponent
                  ) : (
                    <Spinner size={IconSize.XXL} />
                  )}
                </CentralizedWrapper>
              </td>
            </tr>
          ) : rows.length > 0 ? (
            rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
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
            })
          ) : (
            <tr>
              <td className="no-border" colSpan={columns?.length}>
                <CentralizedWrapper>
                  {noDataComponent ? (
                    noDataComponent
                  ) : (
                    <TableColumnEmptyWrapper>
                      {/*<img alt="No data" src={NoDataImage} />*/}
                      <div className="no-data-title">No data found</div>
                    </TableColumnEmptyWrapper>
                  )}
                </CentralizedWrapper>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Styles>
  );
}

export default Table;
