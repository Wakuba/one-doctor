import DashboardElm from './DashboardElm'

const DashboardElmBoard = () => {
  return (
    <div className='flex flex-row justify-around w-full'>
      <DashboardElm href='/'>お気に入り</DashboardElm>
      <DashboardElm href='/'>参加予定イベント</DashboardElm>
      <DashboardElm href='/'>自分の記録帳</DashboardElm>
      <DashboardElm href='/UserProfile'>登録情報の変更</DashboardElm>
    </div>
  )
}

export default DashboardElmBoard
