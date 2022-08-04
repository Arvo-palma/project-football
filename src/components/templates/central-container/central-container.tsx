import Column from 'components/toolkit/column'
import React from 'react'

type CentralContainerProps = {
  className?: string
  children: React.ReactNode
}
const CentralContainer = ({ children, className }: CentralContainerProps) => {
  return <Column className={className}>{children}</Column>
}

export default CentralContainer
