import { classNames } from 'core/helpers/class-names'
import React from 'react'

type CustomLineProps = {
  className?: string
}
const CustomLine = ({ className }: CustomLineProps) => {
  return (
    <hr
      className={classNames(
        'border-gray-50 border-opacity-5 border',
        className
      )}
    />
  )
}

export default CustomLine
