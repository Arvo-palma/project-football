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
      <Row>Gols</Row>
      <Row>
        <Column>Jogador</Column>
        <Column>Gols</Column>
      </Row>
      {mockStatistics.map((stats, index) => (
        <Row key={index}>
          <CustomLine />
          <PlayerRow playerStats={stats} />
        </Row>
      ))}
    </Column>
  )
}

export default StatisticsList
