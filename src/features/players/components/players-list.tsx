import axios from 'axios'
import Card from 'components/toolkit/card/card'
import Row from 'components/toolkit/row'
import { classNames } from 'core/helpers/class-names'
import { handleError } from 'core/helpers/handle-error'
import { PlayerInfo } from 'core/types/player-info'
import React from 'react'

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
    <Row className={classNames('flex-wrap p-1 gap-2', className)}>
      {data.map((player: PlayerInfo) => (
        <Card key={player.Atleta.atleta_id} playerInfo={player} />
      ))}
    </Row>
  )
}

export default PlayersList
