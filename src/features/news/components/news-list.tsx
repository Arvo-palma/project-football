import { Column } from 'components/toolkit'
import { mockNews } from 'core/helpers/mock-news'
import React from 'react'
import NewsCard from './news-card'

type NewsListProps = {
  className?: string
}
const NewsList = ({ className }: NewsListProps) => {
  return (
    <Column className={className}>
      {mockNews.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </Column>
  )
}

export default NewsList
