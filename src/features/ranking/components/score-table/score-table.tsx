import axios from 'axios'
import Table from 'components/toolkit/table/table'
import TableHeadCell from 'components/toolkit/table/table-head-cell'
import TableHeader from 'components/toolkit/table/table-header'
import TableRow from 'components/toolkit/table/table-row'
import React from 'react'

type ScoreTableProps = {
  className?: string
}
const ScoreTable = ({}: ScoreTableProps) => {
  const [data, setData] = React.useState({})
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

  return (
    <Table className="w-full table-fixed">
      <TableHeader>
        <TableRow className={tableRowStdClassName}>
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
    </Table>
  )
}

export default ScoreTable

const tableItemStdClassName =
  'text-white text-opacity-50 font-extralight text-xs inline-flex p-1 '
const tableRowStdClassName =
  'inline-flex w-full flex-nowrap justify-evenly px-2'
