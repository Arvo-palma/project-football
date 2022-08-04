import CentralContainer from 'components/templates/central-container/central-container'
import Header from 'components/templates/header/header'
import { classNames } from 'core/helpers/class-names'
import ScoreTable from 'features/ranking/components/score-table/score-table'
import React from 'react'

type HomeScreenProps = {
  className?: string
}
const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <main className="w-full bg-black bg-opacity-80 flex flex-col min-h-screen min-w-full">
      <Header className={classNames('border-b-2 border-black')} />
      <CentralContainer className="w-4/5 bg-black bg-opacity-40 mx-auto min-h-screen items-center">
        <div className="flex-auto w-full">
          <ScoreTable />
        </div>
      </CentralContainer>
    </main>
  )
}

export default HomeScreen
