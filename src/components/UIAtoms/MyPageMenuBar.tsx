import clsx from 'clsx'
import { VFC, useState, ReactNode } from 'react'

const MyPageMenuBar: VFC = () => {
  const [menuDropDown, setMenuDropDown] = useState<boolean>(false)
  return (
    <div className='relative h-10'>
      <div
        onClick={() => setMenuDropDown(!menuDropDown)}
        className=' flex items-center justify-center bg-prime-blue-pale border-1 border-prime-blue-rich h-full text-white w-40 z-50 pointer-events-auto cursor-pointer'
      >
        <p className='text-prime-blue-rich font-medium'>マイページ</p>
        <span
          className={clsx(
            'ml-2 transition ease-in-out duration-300',
            menuDropDown && 'transition -rotate-90'
          )}
        >
          ◀︎
        </span>
      </div>
      <MyPageMenuBoard {...{ menuDropDown }} />
    </div>
  )
}

const MyPageMenuBoard: VFC<{ menuDropDown: boolean }> = ({ menuDropDown }) => {
  return (
    <div
      className={clsx(
        menuDropDown && 'h-40 overflow-visible',
        'overflow-hidden w-full h-0 top-0 mt-10 left-0 absolute flex flex-col transition-all duration-300'
      )}
    >
      <MyPageMenuLine>お気に入り診療科</MyPageMenuLine>
      <MyPageMenuLine>参加予定イベント</MyPageMenuLine>
      <MyPageMenuLine>医学生の声投稿</MyPageMenuLine>
      <MyPageMenuLine>登録情報変更</MyPageMenuLine>
    </div>
  )
}

const MyPageMenuLine: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p className=' w-full h-full flex flex-col items-center justify-center text-white bg-prime-blue-pale border-prime-blue-rich border-1 border-t-0'>
      {children}
    </p>
  )
}

export default MyPageMenuBar
