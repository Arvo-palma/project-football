/* eslint-disable @next/next/no-img-element */
import { Column, Row } from 'components/toolkit'
import { defaultImage } from 'core/helpers/default-image'
import { PlayerStatistics } from 'core/types/player-statistics'
import React from 'react'

type PlayerRowProps = {
  playerStats: PlayerStatistics
  className?: string
}
const PlayerRow = ({ playerStats, className }: PlayerRowProps) => {
  return (
    <Row className={className}>
      <Column>{playerStats.position}</Column>
      <Column>
        <img
          src={playerStats.image ? playerStats.image : defaultImage}
          alt={`${playerStats.name} image`}
          className="rounded-full"
        />
      </Column>
      <Column>
        <Row></Row>
        <Row>
          <img
            src={playerStats.team_shield}
            alt={`${playerStats.team_name} symbol`}
            className="rounded-full"
          />
          {playerStats.team_name}
        </Row>
      </Column>
      <Column>{playerStats.goals}</Column>
    </Row>
  )
}

export default PlayerRow
