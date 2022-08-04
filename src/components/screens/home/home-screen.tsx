import CentralContainer from 'components/templates/central-container/central-container'
import Header from 'components/templates/header/header'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

type HomeScreenProps = {
  className?: string
}
const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <div className="w-full bg-black bg-opacity-60 flex flex-col min-h-screen min-w-full">
      <Header className={classNames('border-b-2 border-black')} />
      <CentralContainer className="w-3/4 bg-black bg-opacity-70 mx-auto min-h-screen items-center">
        <div className="flex-auto">
          <span className="text-white">Inserir Conteúdo</span>
        </div>
      </CentralContainer>
    </div>
  )
}

export default HomeScreen
