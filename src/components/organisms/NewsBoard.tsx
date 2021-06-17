import NewsLine from '../molecules/NewsLine'

type NewsBoardProps = {
  // content?: NewsLineType[];
  layoutStyles?: any;
}

export default function NewsBoard({ layoutStyles }: NewsBoardProps) {
  // if (content == undefined) content = [{ article: '特になし', title: '特になし' }]
  return (
    <div className={`${layoutStyles.container}`}>
      <div className={`text-2xl sm:text-prime-blue-rich font-semibold ${layoutStyles.title}`}>NEWS</div>
      <p className='text-sm'>イベントや説明会の情報をお知らせします。</p>
      <div className='flex-col items-start bg-white rounded shadow-lg p-2.5 space-y-2'>
        <NewsLine key={0} title='イベント情報' >放射線科がイベントを更新しました。チェック！</NewsLine>
        <NewsLine key={1} title='HP更新情報' >循環器内科が公式HPをリニューアルしました。</NewsLine>
        <NewsLine key={2} title='イベント情報' >循環器内科がイベントを更新しました。チェック！</NewsLine>
        <NewsLine key={3} title='イベント情報' >循環器内科がイベントを更新しました。チェック！</NewsLine>
        <NewsLine key={4} title='イベント情報' >循環器内科がイベントを更新しました。チェック！</NewsLine>
        <NewsLine key={5} title='イベント情報' >循環器内科がイベントを更新しました。チェック！</NewsLine>
      </div>
    </div>
  )
}
