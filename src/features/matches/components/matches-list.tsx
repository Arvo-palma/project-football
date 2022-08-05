import { Column } from 'components/toolkit'
import { mockedMatchesInfo } from 'core/helpers'
import React from 'react'
import MatchCard from './match-card'

type MatchesListProps = {
  className?: string
}
const MatchesList = ({}: MatchesListProps) => {
  return (
    <Column>
      {mockedMatchesInfo.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </Column>
  )
}

export default MatchesList
