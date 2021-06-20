import NewsLine from '../molecules/NewsLine'
import { NewsLineType } from '../../lib/types'

type NewsBoardProps = {
  content: NewsLineType[];
  layoutStyles?: any;
}

export default function NewsBoard({ layoutStyles, content }: NewsBoardProps) {
  if (content == undefined) content = [{ title: '特になし', article: '特になし' }]

  return (
    <div className={`${layoutStyles.container}`}>
      <div className={`sm:text-2xl ov-md:text-4xl sm:text-prime-blue-rich font-semibold ${layoutStyles.title}`}>NEWS</div>
      <p className='text-sm'>イベントや説明会の情報をお知らせします。</p>
      <div className='flex-col items-start bg-white rounded shadow-lg p-2.5 space-y-2'>
        {content.map((news: NewsLineType, idx: number): JSX.Element => {
          return <NewsLine key={idx} title={news.title}>{news.article} </NewsLine>
        })
        }
      </div>
    </div>
  )
}
