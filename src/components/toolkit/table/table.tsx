import React from 'react'

type TableProps = {
  className?: string
  children: React.ReactNode
}
const Table = ({ children, className }: TableProps) => {
  return <table className={className}>{children}</table>
}

export default Table
