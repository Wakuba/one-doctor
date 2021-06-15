import NewsLine from '../molecules/NewsLine'

type NewsBoardProps = {
  content?: any;
  layoutStyles?: any;
}

export default function NewsBoard({ content, layoutStyles }: NewsBoardProps) {
  return (
    <div className={`${layoutStyles.container}`}>
      <div className={`text-2xl sm:text-prime-blue-rich font-semibold ${layoutStyles.title}`}>NEWS</div>
      <p className='text-sm'>イベントや説明会の情報をお知らせします。</p>
      <div className='flex-col items-start bg-white rounded shadow-lg p-2.5 space-y-2'>
        {content.map((news: any, idx: number) => <NewsLine key={idx + 1} title={news.title} >{news.article}</NewsLine>)}
      </div>
    </div>
  )
}
