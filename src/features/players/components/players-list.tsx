import axios from 'axios'
import PlayerCard from 'features/players/components/player-card'
import Row from 'components/toolkit/row'
import { classNames, handleError } from 'core/helpers'
import { PlayerInfo } from 'core/types/player-info'
import React from 'react'
import Link from 'components/toolkit/link'

type PlayersListProps = {
  className?: string
}
const PlayersList = ({ className }: PlayersListProps) => {
  const [data, setData] = React.useState([])
  const playersURL = 'https://api.cartola.globo.com/mercado/destaques'

  const getPlayers = async () => {
    try {
      const response = await axios.get(playersURL)
      setData(response.data)
    } catch (error) {
      throw handleError(error)
    }
  }

  React.useEffect(() => {
    getPlayers()
  }, [])

  return (
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
