import axios from 'axios'
import CustomLine from 'components/toolkit/custom-line'
import Table from 'components/toolkit/table/table'
import TableBody from 'components/toolkit/table/table-body'
import TableBodyCell from 'components/toolkit/table/table-body-cell'
import TableHeadCell from 'components/toolkit/table/table-head-cell'
import TableHeader from 'components/toolkit/table/table-header'
import TableRow from 'components/toolkit/table/table-row'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

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
    const response = await axios.get(tableURL, requestConfig)
    setData(response.data)
  }

  React.useEffect(() => {
    getScores()
  }, [])

  const headCells = [
    'Clube',
    'Pts',
    'PJ',
    'VIT',
    'E',
    'DER',
    'GP',
    'GC',
    'SG',
    'Últimas cinco',
  ]

  return data.length === 0 ? (
    <span>Carregando...</span>
  ) : (
    <Table className="w-full table-fixed">
      <TableHeader>
        <TableRow className={classNames(tableRowStdClassName, 'pt-2 py-1')}>
          {headCells.map((info) => (
            <TableHeadCell
              key={info}
              className={`${tableItemStdClassName} ${
                info === 'Clube' ? 'w-1/2' : 'flex-nowrap'
              }`}
            >
              {info}
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHeader>
      <CustomLine className="mr-4" />
      <TableBody>
        {data.map((team) => (
          <TableRow
            key={team.time.time_id}
            className={classNames(tableRowStdClassName)}
          >
            <TableBodyCell className={tableItemStdClassName}>
              {team.posicao}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName + 'w-1/2'}>
              {team.time.nome_popular}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.pontos}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.jogos}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.vitorias}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.empates}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.derrotas}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.gols_pro}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.gols_contra}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.saldo_gols}
            </TableBodyCell>
            <TableBodyCell className={tableItemStdClassName}>
              {team.ultimos_jogos.map((result, index) => (
                <div key={index} className="inline">
                  {result}
                </div>
              ))}
            </TableBodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ScoreTable

const tableItemStdClassName =
  'text-white text-opacity-50 font-extralight text-xs p-1 '
const tableRowStdClassName = 'inline w-full flex-nowrap justify-evenly px-2'
