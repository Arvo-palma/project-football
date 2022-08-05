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
        'border border-gray-300 border-opacity-50 rounded-xl relative overflow-hidden',
        className
      )}
    >
      <img
        src={examplePlayerImg ? examplePlayerImg : defaultImage}
        alt={`${playerInfo.Atleta.apelido_abreviado} image`}
        className="h-1/2 object-cover w-full"
      />
      <div className="h-1/2 w-full player-card-info justify-items-end">
        <Row className="text-white font-light text-sm p-2">
          {playerInfo.Atleta.apelido}
        </Row>
        <Row className="text-white font-light text-opacity-70 text-xs pl-2 pb-2">
          {playerInfo.posicao}
        </Row>
        <Row className="text-white text-opacity-70 text-xs px-2 py-1 gap-1 bottom-0 absolute truncate self-end">
          <img
            src={playerInfo.escudo_clube}
            alt={`${playerInfo.clube} shield`}
            className="w-4"
          />
          <span className="pl-1 truncate font-light ">
            {playerInfo.clube_nome}
          </span>
        </Row>
      </div>
    </Column>
  )
}

export default Card
