import CentralContainer from 'components/templates/central-container/central-container'
import Header from 'components/templates/header/header'
import { classNames } from 'core/helpers/class-names'
import PlayersList from 'features/players/components/players-list'
import React from 'react'

type HomeScreenProps = {
  className?: string
}
const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <main className="dark w-full bg-black bg-opacity-80 flex flex-col min-h-screen min-w-full">
      <Header className={classNames('border-b-2 border-black')} />
      <CentralContainer className="w-4/5 bg-black bg-opacity-40 mx-auto min-h-screen items-center">
        <div className="flex-auto w-full">
          <PlayersList />
        </div>
      </CentralContainer>
    </main>
  )
}

export default HomeScreen
