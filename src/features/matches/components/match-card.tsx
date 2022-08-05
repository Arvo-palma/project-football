/* eslint-disable @next/next/no-img-element */
import { Column, Row } from 'components/toolkit'
import Link from 'components/toolkit/link'
import { classNames } from 'core/helpers'
import { Match } from 'core/types/match'
import React from 'react'

type MatchCardProps = {
  match: Match
  className?: string
}
const MatchCard = ({ className, match }: MatchCardProps) => {
  return (
    <Row
      className={classNames(
        'match-card-border  hover:bg-black bg-opacity-80',
        className
      )}
    >
      <Link
        href={`https://www.google.com/search?cs=1&q=${match.time1}x${match.time2}`}
        className="w-full flex"
      >
        <Column className="w-2/3">
          <Row>
            <img
              src={match.escudo1}
              alt={`${match.time1} shield`}
              className="w-8 p-1"
            />
            <span className="p-1 pl-2 font-light text-sm">{match.time1}</span>
          </Row>
          <Row>
            <img
              src={match.escudo2}
              alt={`${match.time2} shield`}
              className="w-8 p-1"
            />
            <span className="p-1 pl-2 font-light text-sm">{match.time2}</span>
          </Row>
        </Column>
        <div className="border-l-2 border-gray-500 border-opacity-20 h-18"></div>
        <Column className="w-1/3">
          <Row className="font-light text-sm p-1 justify-center">
            {match.data}
          </Row>
          <Row className="font-light text-sm p-1 justify-center">
            {match.horário}
          </Row>
        </Column>
      </Link>
    </Row>
  )
}

export default MatchCard
