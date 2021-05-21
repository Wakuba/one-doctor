import React, { FC } from 'react'
import NewsLine from '../molecules/NewsLine'

type NewsBoardProps = {
  content: any;
  className?: any;
}
 
const NewsBoard: FC<NewsBoardProps> = ({ content }) => {
  return (
    <div> 
      <div className='text-2xl text-prime-blue-rich font-semibold'>NEWS</div>
      <p className='text-sm'>イベントや説明会の情報をお知らせします。</p>
      <div className='flex-col items-start bg-white rounded shadow-lg p-2.5 space-y-2'>
        {content.map((news: any, idx: number) => <NewsLine key={idx + 1} title={news.title} >{news.article}</NewsLine>)}
      </div>
    </div>
  )
}

export default NewsBoard

