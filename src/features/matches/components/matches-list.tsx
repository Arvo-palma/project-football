// import { Column } from 'components/toolkit'
import { Column, Row } from 'components/toolkit'
import Link from 'components/toolkit/link'
import { mockedMatchesInfo } from 'core/helpers'
import React from 'react'
import MatchCard from './match-card'

type MatchesListProps = {
  className?: string
}
const MatchesList = ({}: MatchesListProps) => {
  return (
    <Column>
      <Row className="p-3 font-light text-sm bg-opacity-30 bg-black">
        Rodada 21 de 38
      </Row>
      <div className="flex flex-wrap">
        {mockedMatchesInfo.map((match, index) => (
          <MatchCard
            key={index}
            match={match}
            className="w-1/2 justify-between"
          />
        ))}
      </div>
    </Column>
  )
}

export default MatchesList
