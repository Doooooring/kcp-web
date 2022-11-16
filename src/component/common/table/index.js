import React from 'react'
import { forwardRef, useEffect, useRef, useMemo } from 'react'
import GetContainerDetail from '@component/containers/getContainerDetail'

import {
  useTable,
  useBlockLayout,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
} from 'react-table'
import styled from 'styled-components'

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  )
})

function ContainerTable({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      maxWidth: 500,
    }),
    [],
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data, defaultColumn },
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          disableResizing: true,
          minWidth: 35,
          width: 35,
          maxWidth: 35,
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0]
        selectionGroupHeader.canResize = false
      })
    },
    (hooks) => {
      hooks.allColumns.push((columns) => [
        // Let's make a column for selection

        ...columns,
        {
          id: 'getDetails',
          disableResizing: true,
          minWidth: 80,
          width: 80,
          maxWidth: 80,
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: () => <div>{'Get Details'}</div>,
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => {
            return (
              <div>
                <GetContainerDetail />
              </div>
            )
          },
        },
      ])
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
        const curLength = Object.keys(headerGroups[0].headers).length
        const selectionGroupHeader = headerGroups[0].headers[curLength - 1]
        selectionGroupHeader.canResize = false
      })
    },
  )

  return (
    <Table
      {...getTableProps({
        style: {
          maxWidth: '1350px',
        },
      })}
    >
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <HeadRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Thead
                {...column.getHeaderProps({
                  style: {
                    border: 'solid 3px black',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  },
                })}
              >
                {column.render('Header')}
                {column.canResize && <Resizer {...column.getResizerProps()} />}
              </Thead>
            ))}
          </HeadRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <Trow {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Tdata
                  {...cell.getCellProps({
                    style: {
                      padding: '10px',
                      border: 'solid 1px gray',
                    },
                  })}
                >
                  {cell.render('Cell')}
                </Tdata>
              ))}
            </Trow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default ContainerTable

const Table = styled.div`
  display: inline-block;
  width: 100%;
  border-spacing: 0;
  border: 1px solid black;
`

const TableHead = styled.div``
const Resizer = styled.div`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  width: 10px;
  border: 0;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(50%);

  z-index: 1;
  ${'' /* prevents from scrolling while dragging on touch devices */}
  touch-action:none;
`

const TableBody = styled.div``
const HeadRow = styled.div`
  width: 100%;
`
const Thead = styled.div`
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
  position: relative;

  :last-child {
    border-right: 0;
  }
`
const tdth = styled.div`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
  position: relative;

  :last-child {
    border-right: 0;
  }
`
const Trow = styled(tdth)`
  width: 100%;
  padding: 0;
`
const Tdata = styled(tdth)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`
