/* eslint-disable @next/next/no-img-element */
import { Column, Row } from 'components/toolkit'
import Link from 'components/toolkit/link'
import { classNames, defaultImage } from 'core/helpers'
import { News } from 'core/types/news'
import React from 'react'

type NewsCardProps = {
  news: News
  className?: string
}
const NewsCard = ({ className, news }: NewsCardProps) => {
  return (
    <Link href={`https://www.google.com/search?cs=1&q=${news.title}`}>
      <Row className={classNames('news-card', className)}>
        <Column>
          <Row className="text-blue-300 pb-1 hover:underline">{news.title}</Row>
          <Row className="text-sm text-opacity-70 text-gray-300">
            {news.broadcaster} - {news.updateTime}
          </Row>
        </Column>
        <Column>
          <img
            src={news.image ? news.image : defaultImage}
            alt={`${news.title} image`}
            className="rounded-xl w-40 max-w-md"
          />
        </Column>
      </Row>
    </Link>
  )
}

export default NewsCard
