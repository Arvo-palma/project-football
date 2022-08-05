import Column from 'components/toolkit/column'
import Row from 'components/toolkit/row'
import { classNames } from 'core/helpers/class-names'
import React from 'react'
import { XIcon } from '@heroicons/react/solid'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'
import Link from 'components/toolkit/link'
import { googleLink } from 'core/helpers/google-link'

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
            <Link href={googleLink}>
              <ArrowSmLeftIcon className="h-7 w-7 ml-2" />
            </Link>
            <span className="pl-1 font-medium text-base">
              Brasileirão Série B
            </span>
          </Row>
        </Column>
        <Column className="text-white p-3">
          <Link href={googleLink}>
            <XIcon className="h-6 w-6" />
          </Link>
        </Column>
      </Row>
      <Row className="w-full justify-evenly px-24">
        <button
          className={`${activeTab === 'matches' && 'active-tab bg-green-800'}
          tab hover:bg-green-800`}
          onClick={() => selectFeature('matches')}
        >
          PARTIDAS
        </button>
        <button
          onClick={() => selectFeature('news')}
          className={`${activeTab === 'news' && 'active-tab bg-green-800'}
          tab hover:bg-green-800`}
        >
          NOTÍCIAS
        </button>
        <button
          onClick={() => selectFeature('ranking')}
          className={`${activeTab === 'ranking' && 'active-tab bg-green-800'}
          tab hover:bg-green-800`}
        >
          CLASSIFICAÇÃO
        </button>
        <button
          onClick={() => selectFeature('statistics')}
          className={`${activeTab === 'statistics' && 'active-tab bg-green-800'}
          tab hover:bg-green-800`}
        >
          ESTATÍSTICAS
        </button>
        <button
          onClick={() => selectFeature('players')}
          className={`${activeTab === 'players' && 'active-tab bg-green-800'}
          tab hover:bg-green-800`}
        >
          JOGADORES
        </button>
      </Row>
    </div>
  )
}

export default Header
