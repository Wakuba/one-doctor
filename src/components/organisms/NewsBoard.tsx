import NewsLine from '../molecules/NewsLine'
import { NewsLineType } from '../../lib/types'

type NewsBoardProps = {
  content?: NewsLineType[];
  layoutStyles?: any;
}

export default function NewsBoard({ layoutStyles, content }: NewsBoardProps) {
  if (content == undefined) content = [{ article: '特になし', title: '特になし' }]
  return (
    <div className={`${layoutStyles.container}`}>
      <div className={`text-2xl sm:text-prime-blue-rich font-semibold ${layoutStyles.title}`}>NEWS</div>
      <p className='text-sm'>イベントや説明会の情報をお知らせします。</p>
      <div className='flex-col items-start bg-white rounded shadow-lg p-2.5 space-y-2'>
        {content.map((news, idx) => <NewsLine key={idx} title={news.title}>{news.article} </NewsLine>)}
      </div>
    </div>
  )
}
