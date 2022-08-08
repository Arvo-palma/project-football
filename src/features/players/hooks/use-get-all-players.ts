import { CustomError } from 'core/types/custom-error'
import { useQuery } from '@tanstack/react-query'
import getAllPlayersService from '../services/get-all-players'

export const useGetAllPlayers = (params?: string) => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    ['/players', params],
    () => getAllPlayersService(params)
  )

  return { data, error, isLoading }
}
