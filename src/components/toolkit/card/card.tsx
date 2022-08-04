/* eslint-disable @next/next/no-img-element */
import { classNames } from 'core/helpers/class-names'
import { defaultImage } from 'core/helpers/default-image'
import { examplePlayerImg } from 'core/helpers/example-player-image'
import { PlayerInfo } from 'core/types/player-info'
import React from 'react'
import Column from '../column'
import Row from '../row'

type CardProps = {
  playerInfo: PlayerInfo
  className?: string
}
const Card = ({ className, playerInfo }: CardProps) => {
  return (
    <Column
      className={classNames(
        'border border-gray-300 border-opacity-50 rounded-xl overflow-hidden',
        className
      )}
    >
      <img
        src={examplePlayerImg ? examplePlayerImg : defaultImage}
        alt={`${playerInfo.Atleta.apelido_abreviado} image`}
        className="h-1/2 object-cover w-full"
      />
      <div className="h-1/2 w-full player-card">
        <Row className="text-white font-thin text-opacity-90 text-sm p-1">
          {playerInfo.Atleta.apelido}
        </Row>
        <Row className="text-white font-thin text-opacity-70 text-xs p-1 pb-2">
          {playerInfo.posicao}
        </Row>
        <Row className="text-white font-thin text-opacity-70 text-xs px-2 py-1 gap-1 truncate">
          <img
            src={playerInfo.escudo_clube}
            alt={`${playerInfo.clube} shield`}
            className="w-5"
          />
          <span className="pl-1">{playerInfo.clube_nome}</span>
        </Row>
      </div>
    </Column>
  )
}

export default Card
