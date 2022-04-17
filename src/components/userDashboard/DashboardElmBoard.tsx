import clsx from 'clsx'
import DashboardElm from './DashboardElm'

const DashboardElmBoard = () => {
  return (
    <div
      className={clsx(
        'sm:flex-col sm:items-center',
        'w-full flex ov-md:flex-row flex-wrap justify-between mb-6'
      )}
    >
      <DashboardElm
        href='/FavoriteDepartment'
        imageSrc='/images/favoriteDepartment.png'
        title='favoriteDepartment'
      >
        お気に入り診療科
      </DashboardElm>
      <DashboardElm
        href='/MyEvents'
        imageSrc='/images/plannedEvent.png'
        title='plannedEvent'
      >
        参加予定イベント
      </DashboardElm>
      <DashboardElm
        href='/MyRecord'
        imageSrc='/images/myNote.png'
        title='myNote'
      >
        自分の記録帳
      </DashboardElm>
      <DashboardElm
        href='/UserProfile'
        imageSrc='/images/editUserInfo.png'
        title='editUserInfo'
      >
        登録情報の変更
      </DashboardElm>
    </div>
  )
}

export default DashboardElmBoard
