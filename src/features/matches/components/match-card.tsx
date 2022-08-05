/* eslint-disable @next/next/no-img-element */
import { Column, Row } from 'components/toolkit'
import { Match } from 'core/types/match'
import React from 'react'

type MatchCardProps = {
  match: Match
  className?: string
}
const MatchCard = ({ className, match }: MatchCardProps) => {
  return (
    <Column className={className}>
      <Column>
        <Row>
          <img
            src={match.escudo1}
            alt={`${match.time1} shield`}
            className="w-4"
          />
          <span className="pl-1 font-normal ">{match.time1}</span>
        </Row>
        <Row>
          <img
            src={match.escudo2}
            alt={`${match.time2} shield`}
            className="w-4"
          />
          <span className="pl-1 font-normal ">{match.time2}</span>
        </Row>
      </Column>
      <Column>
        <Row>{match.data}</Row>
        <Row>{match.horário}</Row>
      </Column>
    </Column>
  )
}

export default MatchCard
