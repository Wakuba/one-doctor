import clsx from 'clsx'
import Link from 'next/link'
import { VFC, useState, ReactNode } from 'react'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'

const MyPageMenuBar: VFC = () => {
  const [menuDropDown, setMenuDropDown] = useState<boolean>(false)
  return (
    <div className='relative h-10  pointer-events-none'>
      <div
        onClick={() => setMenuDropDown(!menuDropDown)}
        className='flex items-center justify-center bg-prime-blue-pale border-1 border-prime-blue-rich h-full text-white w-40 z-50 pointer-events-auto cursor-pointer'
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
  const auth = useAuthProvider()
  return (
    <div
      className={clsx(
        menuDropDown && '!h-[160px] overflow-visible',
        'overflow-hidden w-full h-0 top-10 pointer-events-none left-0 absolute flex flex-col transition-all duration-500'
      )}
    >
      <MyPageMenuLine href='/FavoriteDepartment'>
        お気に入り診療科
      </MyPageMenuLine>
      <MyPageMenuLine href='/MyEvents'>参加予定イベント</MyPageMenuLine>
      <MyPageMenuLine href='/MyRecord'>医学生の声投稿</MyPageMenuLine>
      <MyPageMenuLine href='/UserProfile'>登録情報変更</MyPageMenuLine>
      <div
        className='w-full h-full flex flex-col cursor-pointer pointer-events-auto items-center justify-center text-white bg-prime-blue-pale border-prime-blue-rich border-1 border-t-0'
        onClick={() => auth.logOut()}
      >
        ログアウト
      </div>
    </div>
  )
}

const MyPageMenuLine: VFC<{ children: ReactNode; href: string }> = ({
  children,
  href = '/',
}) => {
  return (
    <Link href={href}>
      <a className='w-full h-full flex flex-col cursor-pointer pointer-events-auto items-center justify-center text-white bg-prime-blue-pale border-prime-blue-rich border-1 border-t-0'>
        {children}
      </a>
    </Link>
  )
}

export default MyPageMenuBar
