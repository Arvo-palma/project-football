import DefaultHeader from 'components/templates/default-header/default-header'
import React from 'react'

type HomeScreenProps = {
  className?: string
}
const HomeScreen = ({ className }: HomeScreenProps) => {
  return (
    <div className="w-full h-full bg-black bg-cover bg-opacity-60">
      <DefaultHeader className={className} />
    </div>
  )
}

export default HomeScreen
