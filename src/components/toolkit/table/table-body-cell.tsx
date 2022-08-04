import React from 'react'

type TableBodyCellProps = {
  children: React.ReactNode | string
  className?: string
}
const TableBodyCell = ({ children, className }: TableBodyCellProps) => {
  return <td className={className}>{children}</td>
}

export default TableBodyCell
