import DashboardElm from '../molecules/DashboardElm'

const DashboardElmBoard = () => {
  return (
    <div className='flex flex-row justify-around w-full'>
      <DashboardElm>お気に入り</DashboardElm>
      <DashboardElm>参加予定イベント</DashboardElm>
      <DashboardElm>自分の記録帳</DashboardElm>
      <DashboardElm>登録情報の変更</DashboardElm>
    </div>
  )
}

export default DashboardElmBoard
