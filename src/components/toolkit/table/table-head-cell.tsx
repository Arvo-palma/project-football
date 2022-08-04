import React from 'react'

type TableHeadCellProps = {
  className?: string
  children: string
}
const TableHeadCell = ({ children, className }: TableHeadCellProps) => {
  return <th className={className}>{children}</th>
}

export default TableHeadCell
