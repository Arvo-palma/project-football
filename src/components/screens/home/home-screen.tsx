import CentralContainer from 'components/templates/central-container/central-container'
import Header from 'components/templates/header/header'
import { classNames } from 'core/helpers/class-names'
import Switcher from 'features/switcher/switcher'
import React from 'react'

type HomeScreenProps = {
  className?: string
}
const HomeScreen = ({}: HomeScreenProps) => {
  const [feature, setFeature] = React.useState('ranking')
  return (
    <main className="dark w-full bg-black bg-opacity-80 flex flex-col min-h-screen min-w-full">
      <Header className={classNames('border-b-2 border-black')} />
      <CentralContainer className="w-4/5 bg-black bg-opacity-40 mx-auto min-h-screen items-center">
        <Switcher feature={feature} />
      </CentralContainer>
    </main>
  )
}

export default HomeScreen
