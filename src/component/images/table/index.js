import React from "react";
import { useEffect } from "react";
import ImageActions from "@component/images/imageActions";
import { IndeterminateCheckbox } from "@component/common/table/indeterminateCheckbox";

import { useTable, useFlexLayout, useRowSelect } from "react-table";
import styled from "styled-components";
import { AiOutlineBranches } from "react-icons/ai";

const tHeadStyle = (headerGroup, column) => {
  return {
    style: {
      border: 0,
      background: "rgb(240, 240, 240)",
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      position: `${
        headerGroup.headers.indexOf(column) === 0 ||
        headerGroup.headers.indexOf(column) === 1
          ? "sticky"
          : "static"
      }`,
      zIndex: `${
        headerGroup.headers.indexOf(column) === 0 ||
        headerGroup.headers.indexOf(column) === 1
          ? "3"
          : "none"
      }`,
      left: headerGroup.headers.indexOf(column) === 1 ? 35 : 0,
    },
  };
};

export default function ImageTable(props) {
  const { columns, data, setImagesToDelete } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    toggleRowSelected,
  } = useTable({ columns, data }, useFlexLayout, useRowSelect, (hooks) => {
    hooks.allColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: "selection",
        disableResizing: true,
        minWidth: 35,
        width: 35,
        maxWidth: 35,
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
            />
          </div>
        ),
      },
      ...columns,
      {
        id: "Actions",
        disableResizing: true,
        minWidth: 80,
        width: 80,
        maxWidth: 80,
        Header: () => <div>{"Actions"}</div>,
        Cell: ({ row }) => {
          console.log(row);
          return (
            <div>
              <ImageActions imageId={row.original.imageId} />
            </div>
          );
        },
      },
    ]);
  });

  useEffect(() => {
    setImagesToDelete(
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
                style: {
                  border: 0,
                  postition: "sticky",
                  top: 0,
                },
              })}
            >
              {headerGroup.headers.map((column) => {
                const columnStyle = tHeadStyle(headerGroup, column);
                console.log(columnStyle);
                return (
                  <Thead
                    {...column.getHeaderProps({
                      style: columnStyle.style,
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
                  style: {
                    width: "1100px",
                    height: "50px",
                    border: 0,
                    textAlign: "center",
                    borderTop: "1px solid rgba(50, 50, 50, 0.2)",
                    borderBottom: "1px solid rgba(50, 50, 50 ,0.2)",
                  },
                })}
                onClick={() => {
                  row.toggleRowSelected(!row.isSelected);
                }}
              >
                {row.cells.map((cell) => (
                  <Tdata
                    {...cell.getCellProps({
                      style: {
                        padding: "0.5rem",
                        border: 0,
                        position: `${
                          row.cells.indexOf(cell) === 0 ||
                          row.cells.indexOf(cell) === 1
                            ? "sticky"
                            : "static"
                        }`,
                        left: row.cells.indexOf(cell) === 1 ? 35 : 0,
                        zIndex: `${
                          row.cells.indexOf(cell) === 0 ? "3" : "none"
                        }`,
                        backgroundColor: `${
                          row.isSelected
                            ? "rgb(240, 240, 240)"
                            : "rgb(255, 255, 255)"
                        }`,
                      },
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
