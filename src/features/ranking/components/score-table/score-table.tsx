/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { Column, CustomLine, Spinner } from 'components/toolkit'
import Link from 'components/toolkit/link'
import {
  Table,
  TableBody,
  TableBodyCell,
  TableHeadCell,
  TableHeader,
  TableRow,
} from 'components/toolkit/table'
import { classNames, handleError } from 'core/helpers'
import { TeamInfo } from 'core/types/team-info'
import React from 'react'
import { iconSrc } from './result-icon-src'

type ScoreTableProps = {
  className?: string
}
const ScoreTable = ({}: ScoreTableProps) => {
  const [data, setData] = React.useState([])
  const tableURL = 'https://api.api-futebol.com.br/v1/campeonatos/14/tabela'
  const requestConfig = {
    headers: {
      Authorization: 'Bearer test_716495c3d64a77813db85ecad3a88a',
    },
  }
  const getScores = async () => {
    try {
      const response = await axios.get(tableURL, requestConfig)
      setData(response.data)
    } catch (error) {
      throw handleError(error)
    }
  }

  React.useEffect(() => {
    getScores()
  }, [])

  const headCells = ['Pts', 'PJ', 'VIT', 'E', 'DER', 'GP', 'GC', 'SG']

  const resultIcon = (result: string) => {
    switch (result) {
      case 'v':
        return iconSrc.v
      case 'e':
        return iconSrc.e
      case 'd':
        return iconSrc.d
      default:
        return ''
    }
  }

  return data.length === 0 ? (
    <Column className={classNames('items-center')}>
      <Spinner color="black" size={100} />
      Carregando...
    </Column>
  ) : (
    <Table className="w-full table-fixed mt-3">
      <TableHeader>
        <TableRow className="table-row">
          <TableHeadCell className="table-head-club-item">Clubes</TableHeadCell>
          {headCells.map((info) => (
            <TableHeadCell key={info} className="table-head-item pb-1 w-8">
              {info}
            </TableHeadCell>
          ))}
          <TableHeadCell className="table-head-item w-24 ">
            Últimas cinco
          </TableHeadCell>
        </TableRow>
      </TableHeader>
      <CustomLine className="mr-4" />
      <TableBody>
        {data.map((team: TeamInfo) => (
          <Link
            key={team.time.time_id}
            href={`https://www.google.com/search?cs=1&q=${team.time.nome_popular}`}
          >
            {team.posicao !== 1 && <CustomLine className="mx-4" />}
            <div className="py-2 hover:bg-black">
              <TableRow className="table-row">
                <TableBodyCell className="table-body-item">
                  {team.posicao}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  <img
                    src={team.time.escudo}
                    alt={`${team.time.sigla} symbol`}
                    className="w-6"
                  />
                </TableBodyCell>
                <TableBodyCell className={'table-body-name-item'}>
                  {team.time.nome_popular}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.pontos}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.jogos}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.vitorias}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.empates}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.derrotas}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.gols_pro}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.gols_contra}
                </TableBodyCell>
                <TableBodyCell className="table-body-item">
                  {team.saldo_gols}
                </TableBodyCell>
                <TableBodyCell className="p-1 w-24">
                  {team.ultimos_jogos.map((result: string, index: number) => (
                    <div key={index} className="inline p-0.5">
                      <img
                        className="w-3 inline"
                        src={resultIcon(result)}
                        alt={result}
                      />
                    </div>
                  ))}
                </TableBodyCell>
              </TableRow>
            </div>
          </Link>
        ))}
      </TableBody>
    </Table>
  )
}

export default ScoreTable
