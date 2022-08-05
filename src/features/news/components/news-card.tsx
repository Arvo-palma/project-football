/* eslint-disable @next/next/no-img-element */
import { Column, Row } from 'components/toolkit'
import { defaultImage } from 'core/helpers/default-image'
import { News } from 'core/types/news'
import React from 'react'

type NewsCardProps = {
  news: News
  className?: string
}
const NewsCard = ({ className, news }: NewsCardProps) => {
  return (
    <Row className={className}>
      <Column>
        <Row>{news.title}</Row>
        <Row>
          {news.broadcaster} - {news.updateTime}
        </Row>
      </Column>
      <Column>
        <img
          src={news.image ? news.image : defaultImage}
          alt={`${news.title} image`}
          className="rounded-xl"
        />
      </Column>
    </Row>
  )
}

export default NewsCard
