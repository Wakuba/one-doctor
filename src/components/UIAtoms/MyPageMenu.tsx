import Link from 'next/link'
import { useState } from 'react'

const MyPageMenu: React.VFC<{ layoutStyle: string }> = ({ layoutStyle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className={`relative ${layoutStyle}`}>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='h-[40px] w-[135px] border-prime-blue-rich border-1 bg-prime-blue-pale text-prime-blue-rich flex flex-row items-center p-3 mr-3'
      >
        <p className='inline mr-3'>マイページ</p>
        <p
          className={`inline-block text-white transform transition duration-300 ${
            isMenuOpen && '-rotate-90'
          }`}
        >
          ◀
        </p>
      </div>
      {isMenuOpen && (
        <ul className='absolute w-[135px]'>
          <List href='/'>お気に入り</List>
          <List href='/'>参加予定イベント</List>
          <List href='/MyNote'>医学生の声を投稿</List>
          <List href='/UserProfile'>登録情報の変更</List>
        </ul>
      )}
    </div>
  )
}

const List: React.VFC<{ children: string; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link href={href}>
      <a className='h-[40px] w-full text-prime-blue-rich bg-prime-blue-pale border-1 border-prime-blue-rich flex flex-col justify-center items-center'>
        {children}
      </a>
    </Link>
  )
}

export default MyPageMenu
