import { VFC } from 'react'
import NewsLine from './NewsLine'
import { NewsLineType } from '../../lib/types'
import clsx from 'clsx'

type NewsBoardProps = {
  content: NewsLineType[]
  layoutStyles?: string
}

const NewsBoard: VFC<NewsBoardProps> = ({ layoutStyles, content }) => {
  if (content == undefined)
    content = [{ title: '特になし', detail: '特になし' }]

  return (
    <div className='w-full'>
      <div
        className={clsx(
          'mb-2 sm:text-2xl ov-md:text-3xl sm:text-prime-blue-rich font-semibold',
          layoutStyles
        )}
      >
        NEWS
      </div>
      <p className='text-sm mb-4'>イベントや説明会の情報をお知らせします。</p>
      <div className='flex-col items-start bg-white rounded shadow-lg sm:py-4 sm:px-2 sm:space-y-2 ov-md:py-6 ov-md:px-4 ov-md:space-y-3'>
        {content.map((news: NewsLineType, idx: number): JSX.Element => {
          return (
            <NewsLine key={idx} title={news.title}>
              {news.detail}{' '}
            </NewsLine>
          )
        })}
      </div>
    </div>
  )
}

export default NewsBoard
