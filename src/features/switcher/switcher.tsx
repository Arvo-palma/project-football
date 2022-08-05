import MatchesList from 'features/matches/components/matches-list'
import NewsList from 'features/news/components/news-list'
import PlayersList from 'features/players/components/players-list'
import ScoreTable from 'features/ranking/components/score-table/score-table'
import StatisticsList from 'features/statistics/components/statistics-list'
import React from 'react'

type SwitcherProps = {
  feature: string
}
const Switcher = ({ feature }: SwitcherProps) => {
  const selectFeature = (feature: string) => {
    switch (feature) {
      case 'matches':
        return <MatchesList />
      case 'news':
        return <NewsList />
      case 'ranking':
        return <ScoreTable />
      case 'statistics':
        return <StatisticsList />
      case 'players':
        return <PlayersList />
      default:
        return <MatchesList />
    }
  }
  return <div className="flex-auto w-full">{selectFeature(feature)}</div>
}

export default Switcher
