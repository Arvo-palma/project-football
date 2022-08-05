/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { Column, CustomLine, Spinner } from 'components/toolkit'
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
        <TableRow
          className={
            'flex-row inline-flex w-full px-2 self-center items-center'
          }
        >
          <TableHeadCell className="text-white text-left text-opacity-60 font-light text-xs flex-auto">
            Clubes
          </TableHeadCell>
          {headCells.map((info) => (
            <TableHeadCell
              key={info}
              className="text-white text-center text-opacity-60 font-light text-xs pb-1 w-6"
            >
              {info}
            </TableHeadCell>
          ))}
          <TableHeadCell className="text-white text-center text-opacity-60 font-light text-xs w-24 ">
            Últimas cinco
          </TableHeadCell>
        </TableRow>
      </TableHeader>
      <CustomLine className="mr-4" />
      <TableBody>
        {data.map((team: TeamInfo) => (
          <div key={team.time.time_id} className="pt-2">
            {team.posicao !== 1 && <CustomLine className="mx-4" />}
            <TableRow
              className={
                'flex-row inline-flex w-full px-2 self-center items-center hover:bg-black'
              }
            >
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.posicao}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                <img
                  src={team.time.escudo}
                  alt={`${team.time.sigla} symbol`}
                  className="w-5"
                />
              </TableBodyCell>
              <TableBodyCell
                className={'flex-auto text-white font-light text-sm p-1'}
              >
                {team.time.nome_popular}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.pontos}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.jogos}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.vitorias}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.empates}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.derrotas}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.gols_pro}
              </TableBodyCell>
              <TableBodyCell className={tableBodyItemStdClassName}>
                {team.gols_contra}
              </TableBodyCell>
              <TableBodyCell className={`${tableBodyItemStdClassName}`}>
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
        ))}
      </TableBody>
    </Table>
  )
}

export default ScoreTable

const tableBodyItemStdClassName =
  'text-white text-opacity-60 font-light text-sm p-1 w-6'
