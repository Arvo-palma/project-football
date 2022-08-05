/* eslint-disable @next/next/no-img-element */
import { Column, Row } from 'components/toolkit'
import { classNames, defaultImage } from 'core/helpers'
import { PlayerStatistics } from 'core/types/player-statistics'
import React from 'react'

type PlayerRowProps = {
  playerStats: PlayerStatistics
  className?: string
}
const PlayerRow = ({ playerStats, className }: PlayerRowProps) => {
  return (
    <Row className={classNames('w-full py-2', className)}>
      <Column className="px-4 p-2 font-light">{playerStats.position}</Column>
      <Column>
        <img
          src={playerStats.image ? playerStats.image : defaultImage}
          alt={`${playerStats.name} image`}
          className="rounded-full h-11"
        />
      </Column>
      <Column className="flex-grow pl-2">
        <Row className="font-light text-opacity-70 ">{playerStats.name}</Row>
        <Row>
          <img
            src={playerStats.team_shield}
            alt={`${playerStats.team_name} symbol`}
            className="h-6 p-1"
          />
          <span className="font-thin text-sm text-opacity-70 p-1">
            {playerStats.team_name}
          </span>
        </Row>
      </Column>
      <Column className="px-4 py-2 font-light">{playerStats.goals}</Column>
    </Row>
  )
}

export default PlayerRow
