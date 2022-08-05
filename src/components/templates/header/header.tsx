import Column from 'components/toolkit/column'
import Row from 'components/toolkit/row'
import { classNames } from 'core/helpers/class-names'
import React from 'react'
import { XIcon } from '@heroicons/react/solid'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'

type HeaderProps = {
  className?: string
  changeFeature: (feature: string) => void
}
const Header = ({ className, changeFeature }: HeaderProps) => {
  const [activeTab, setActiveTab] = React.useState('')

  const selectFeature = (feature: string) => {
    changeFeature(feature)
    setActiveTab(feature)
  }
  return (
    <div className={classNames('bg-green-900', className)}>
      <Row className="w-full justify-between">
        <Column className="text-white p-3">
          <Row>
            <ArrowSmLeftIcon className="h-7 w-7 ml-2" />
            <span className="pl-1 font-light text-base">
              Brasileirão Série B
            </span>
          </Row>
        </Column>
        <Column className="text-white p-3">
          <XIcon className="h-6 w-6" />
        </Column>
      </Row>
      <Row className="w-full justify-evenly px-24">
        <button
          className={`${
            activeTab === 'matches' && 'border-b-2 border-white bg-green-800'
          }
            p-3 text-center font-light text-xs text-white hover:bg-green-800 flex-grow`}
          onClick={() => selectFeature('matches')}
        >
          PARTIDAS
        </button>
        <Column
          className={`${
            activeTab === 'news' && 'border-b-2 border-white bg-green-800'
          }
            p-3 text-center font-light text-xs text-white hover:bg-green-800 flex-grow`}
        >
          NOTÍCIAS
        </Column>
        <button
          onClick={() => selectFeature('ranking')}
          className={`${
            activeTab === 'ranking' &&
            'border-b-2 border-white bg-green-800 font-normal'
          }
            p-3 font-light text-center text-xs text-white hover:bg-green-800 flex-grow`}
        >
          CLASSIFICAÇÃO
        </button>
        <Column
          className={`${
            activeTab === 'statistics' && 'border-b-2 border-white bg-green-800'
          }
            p-3 text-center font-light text-xs text-white hover:bg-green-800 flex-grow`}
        >
          ESTATÍSTICAS
        </Column>
        <button
          onClick={() => selectFeature('players')}
          className={`${
            activeTab === 'players' &&
            'border-b-2 border-white bg-green-800 font-normal'
          }
        p-3 text-center font-light text-xs text-white hover:bg-green-800 flex-grow`}
        >
          JOGADORES
        </button>
      </Row>
    </div>
  )
}

export default Header
