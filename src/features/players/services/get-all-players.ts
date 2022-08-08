import { handleError } from 'core/helpers/handle-error'
import { api } from 'core/lib/api'
import { PlayerInfo } from 'core/types/player-info'

export type Params = {
  category?: string
  search?: string
  size?: number
  page?: number
}
export type Response = PlayerInfo[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllPlayersService: ServiceType = async () => {
  try {
    const response = await api.get<PlayerInfo[]>(
      'https://api.cartola.globo.com/mercado/destaques'
    )
    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllPlayersService
