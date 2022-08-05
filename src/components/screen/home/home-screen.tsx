import CentralContainer from 'components/templates/central-container/central-container'
import Header from 'components/templates/header/header'
import { classNames } from 'core/helpers/class-names'
import Switcher from 'features/switcher/switcher'
import React from 'react'

type HomeScreenProps = {
  className?: string
}
const HomeScreen = ({}: HomeScreenProps) => {
  const [feature, setFeature] = React.useState('matches')
  return (
    <main className="dark main">
      <Header
        className={classNames('border-b-2 border-black')}
        changeFeature={setFeature}
      />
      <CentralContainer className="central-container">
        <Switcher feature={feature} />
      </CentralContainer>
    </main>
  )
}

export default HomeScreen
