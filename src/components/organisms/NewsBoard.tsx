import NewsLine from '../molecules/NewsLine'
import { NewsLineType } from '../../lib/types'
import {FC} from 'react'

type NewsBoardProps = {
  content: NewsLineType[];
  layoutStyles?: any;
}

const NewsBoard:FC<NewsBoardProps>= ({ layoutStyles, content } )=> {
  if (content == undefined) content = [{ title: '特になし', detail: '特になし' }]

  return (
    <div className='w-full'>
      <div className={`sm:text-2xl ov-md:text-4xl sm:text-prime-blue-rich font-semibold ${layoutStyles}`}>NEWS</div>
      <p className='text-sm'>イベントや説明会の情報をお知らせします。</p>
      <div className='flex-col items-start bg-white rounded shadow-lg p-2.5 space-y-2'>
        {content.map((news: NewsLineType, idx: number): JSX.Element => {
          return <NewsLine key={idx} title={news.title}>{news.detail} </NewsLine>
        })
        }
      </div>
    </div>
  )
}

export default NewsBoard
