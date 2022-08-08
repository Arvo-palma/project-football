import PlayerCard from 'features/players/components/player-card'
import Row from 'components/toolkit/row'
import { classNames } from 'core/helpers'
import { PlayerInfo } from 'core/types/player-info'
import React from 'react'
import Link from 'components/toolkit/link'
import { useGetAllPlayers } from '../hooks/use-get-all-players'
import { Column, Spinner } from 'components/toolkit'

type PlayersListProps = {
  className?: string
}
const PlayersList = ({ className }: PlayersListProps) => {
  const { data, isLoading } = useGetAllPlayers()

  return isLoading ? (
    <Column className={classNames('items-center')}>
      <Spinner color="black" size={100} />
      Carregando...
    </Column>
  ) : (
    <Row className={classNames('flex-wrap py-1 pl-1', className)}>
      {data.map((player: PlayerInfo) => (
        <Link
          key={player.Atleta.atleta_id}
          href={`https://www.google.com/search?cs=1&q=${player.Atleta.nome}`}
          className="flex py-1"
        >
          <PlayerCard playerInfo={player} />
        </Link>
      ))}
    </Row>
  )
}

export default PlayersList
