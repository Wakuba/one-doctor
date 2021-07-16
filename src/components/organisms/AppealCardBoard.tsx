import AppealCard from '../molecules/AppealCard'

const AppealCardBoard = () => {
  return (
    <div className='flex flex-col items-center w-full bg-white shadow-lg'>
      <div className='flex-col text-sm my-4'>イベントや見学に参加することで、<br /> より詳しく知ることができます</div>
      <div className='h-4/5 sm:flex sm:flex-col sm:items-center ov-md:grid ov-md:grid-flow-row ov-md:grid-cols-2 sm:space-y-4 pb-4'>
        <AppealCard layoutStyle='ov-md:mb-4' src='/svg/questionnaire-icon.svg'>
          <div>より詳細な臨床情報や 研究内容に触れてみましょう！</div>
          <div>診療科公式ホームページ→</div>
        </AppealCard>
        <AppealCard layoutStyle='ov-md:mb-4' src='/svg/class-icon.svg'>
          <div>最新の情報をチェックして みましょう！</div>
          <div>イベントページ→</div>
        </AppealCard>
        <AppealCard layoutStyle='ov-md:mb-4' src='/svg/doctor-icon.svg'>
          <div>あなたの希望するイベントを 開いてもらえるかも…？</div>
          <div>イベントの提案をする→</div>
        </AppealCard>
        <AppealCard layoutStyle='ov-md:mb-4' src='/svg/notebook-icon.svg'>
          <div>自分だけの質問をしてみましょう！</div>
          <div>見学申し込みをする→</div>
        </AppealCard>
      </div>
    </div>
  )
}

export default AppealCardBoard
