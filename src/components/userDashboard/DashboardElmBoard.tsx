import clsx from 'clsx'
import { cwd } from 'process'
import DashboardElm from './DashboardElm'

const DashboardElmBoard = () => {
  return (
    <div
      className={clsx(
        'sm:flex-col sm:items-center',
        'w-full flex ov-md:flex-row flex-wrap justify-between mb-6'
      )}
    >
      <DashboardElm href='/'>お気に入り診療科</DashboardElm>
      <DashboardElm href='/'>参加予定イベント</DashboardElm>
      <DashboardElm href='/'>自分の記録帳</DashboardElm>
      <DashboardElm href='/UserProfile'>登録情報の変更</DashboardElm>
    </div>
  )
}

export default DashboardElmBoard
