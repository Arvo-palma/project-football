import MatchesList from 'features/matches/components/matches-list'
import PlayersList from 'features/players/components/players-list'
import ScoreTable from 'features/ranking/components/score-table/score-table'
import React from 'react'

type SwitcherProps = {
  feature: string
}
const Switcher = ({ feature }: SwitcherProps) => {
  const selectFeature = (feature: string) => {
    switch (feature) {
      case 'ranking':
        return <ScoreTable />
      case 'players':
        return <PlayersList />
      case 'matches':
        return <MatchesList />
      default:
        return <ScoreTable />
    }
  }
  return <div className="flex-auto w-full">{selectFeature(feature)}</div>
}

export default Switcher
