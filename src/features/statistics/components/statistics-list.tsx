import { Column, CustomLine, Row } from 'components/toolkit'
import { mockStatistics } from 'core/helpers/mock-statistics'
import React from 'react'
import PlayerRow from './player-row'

type StatisticsListProps = {
  className?: string
}
const StatisticsList = ({ className }: StatisticsListProps) => {
  return (
    <Column className={className}>
      <Row className="p-3 font-normal text-sm">Gols</Row>
      <Row>
        <Column className="p-3 font-light text-sm flex-grow">Jogador</Column>
        <Column className="p-3 font-light text-sm">Gols</Column>
      </Row>
      {mockStatistics.map((stats, index) => (
        <Column key={index}>
          <CustomLine className="mx-4" />
          <PlayerRow playerStats={stats} />
        </Column>
      ))}
    </Column>
  )
}

export default StatisticsList
