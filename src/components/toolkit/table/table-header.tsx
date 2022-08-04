import React from 'react'

type TableHeaderProps = {
  className?: string
  children: React.ReactNode
}
const TableHeader = ({ children, className }: TableHeaderProps) => {
  return <thead className={className}>{children}</thead>
}

export default TableHeader
