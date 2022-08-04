import React from 'react'

type TableBodyProps = {
  className?: string
  children: React.ReactNode
}
const TableBody = ({ children, className }: TableBodyProps) => {
  return <tbody className={className}>{children}</tbody>
}

export default TableBody
