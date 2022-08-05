import { Column } from 'components/toolkit'
import { classNames, mockNews } from 'core/helpers'
import React from 'react'
import NewsCard from './news-card'

type NewsListProps = {
  className?: string
}
const NewsList = ({ className }: NewsListProps) => {
  return (
    <Column className={classNames('p-8 gap-2', className)}>
      {mockNews.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </Column>
  )
}

export default NewsList
