import Column from 'components/toolkit/column'
import Row from 'components/toolkit/row'
import { classNames } from 'core/helpers/class-names'
import React from 'react'
import { XIcon } from '@heroicons/react/solid'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'

type DefaultHeaderProps = {
  className?: string
}
const DefaultHeader = ({ className }: DefaultHeaderProps) => {
  return (
    <div className={classNames('bg-green-900', className)}>
      <Row className="w-full justify-between">
        <Column className="text-white p-3">
          <Row>
            <ArrowSmLeftIcon className="h-7 w-7 ml-2" />
            <span className="pl-1">Brasileirão Série B</span>
          </Row>
        </Column>
        <Column className="text-white p-3">
          <XIcon className="h-6 w-6" />
        </Column>
      </Row>
      <Row className="w-full justify-evenly px-24">
        <Column className={navItemStdClassName}>PARTIDAS</Column>
        <Column className={navItemStdClassName}>NOTÍCIAS</Column>
        <Column className={navItemStdClassName}>CLASSIFICAÇÃO</Column>
        <Column className={navItemStdClassName}>ESTATÍSTICAS</Column>
        <Column className={navItemStdClassName}>JOGADORES</Column>
      </Row>
    </div>
  )
}

export default DefaultHeader

const navItemStdClassName = 'p-3 font-extralight text-sm text-white'
