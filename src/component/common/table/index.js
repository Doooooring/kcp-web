import React from "react";
import { useEffect, useMemo } from "react";
import GetContaienrDetail from "@component/containers/getContainerDetail";
import { IndeterminateCheckbox } from "@component/common/table/indeterminateCheckbox";

import { useTable, useFlexLayout, useRowSelect } from "react-table";
import styled from "styled-components";
import { AiOutlineBranches } from "react-icons/ai";

export default function CommonTable(props) {
  const {
    columns,
    data,
    tHeadStyle,
    tHeadRowStyle,
    tRowStyle,
    tDataStyle,
    setContainersToDelete,
    effectFunction,
    effectDependency,
  } = props;

  const tableColumns = useMemo(() => {
    const newColumns = [
      {
        id: "selection",
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox
              {...row.getToggleRowSelectedProps()}
              selectedFlatRows={selectedFlatRows}
              setContainersToDelete={setContainersToDelete}
            />
          </div>
        ),
      },
      ...columns,
      {
        id: "getDetails",
        Header: () => <div>{"Actions"}</div>,
        Cell: ({ row }) => {
          console.log(row);
          return (
            <div>
              <GetContaienrDetail ContainerId={row.original.containerId} />
            </div>
          );
        },
      },
    ];
    return newColumns;
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    toggleRowSelected,
  } = useTable({ tableColumns, data }, useFlexLayout, useRowSelect);

  useEffect(() => {
    setContainersToDelete(
      selectedFlatRows.map((comp) => {
        return comp.original["name"];
      })
    );
  }, [selectedFlatRows]);

  return (
    <Wrapper>
      <Table
        {...getTableProps({
          style: {
            border: 0,
          },
        })}
      >
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <HeadRow
              {...headerGroup.getHeaderGroupProps({
                style: tHeadRowStyle().style,
              })}
            >
              {headerGroup.headers.map((column) => {
                return (
                  <Thead
                    {...column.getHeaderProps({
                      style: tHeadStyle(headerGroup, column).style,
                    })}
                  >
                    {column.render("Header")}
                  </Thead>
                );
              })}
            </HeadRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Trow
                key={row.id}
                {...row.getRowProps({
                  style: tRowStyle().style,
                })}
                onClick={() => {
                  row.toggleRowSelected(!row.isSelected);
                }}
              >
                {row.cells.map((cell) => (
                  <Tdata
                    {...cell.getCellProps({
                      style: tDataStyle(row, cell).style,
                    })}
                  >
                    {cell.render("Cell")}
                  </Tdata>
                ))}
              </Trow>
            );
          })}
        </TableBody>
      </Table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  overflow: scroll;
`;

const Table = styled.div`
  display: inline-block;
  border-spacing: 0;
  border: 1px solid black;
`;

const TableHead = styled.div``;

const TableBody = styled.div``;
const HeadRow = styled.div``;
const Thead = styled.div`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  ${
    "" /* In this example we use an absolutely position resizer,
       so this is required. */
  }
  position: relative;

  :last-child {
    border-right: 0;
  }
`;
const tdth = styled.div`
  display: inline-block;

  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  position: relative;

  :last-child {
    border-right: 0;
  }
`;
const Trow = styled(tdth)`
  padding: 0;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }
`;
const Tdata = styled(tdth)`
  margin: 0;
  padding: 0;
  height: 100%;
`;
