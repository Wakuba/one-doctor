import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { ReactNode, useState, VFC } from 'react'
import { Link as Scroll } from 'react-scroll'
import { useRequiredPermission } from '../../lib/customHooks/useRequiredPermission'

const MenuBar: React.VFC<{ layoutStyle: string }> = ({ layoutStyle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuEventActive, setIsMenuEventActive] = useState(false)
  const {
    auth,
    NotAuthorizedAlert,
    NotEmailVerifiedAlert,
    AccountNotExistAlert,
    permissionChecker,
  } = useRequiredPermission()
  return (
    <>
      <div
        className={`relative w-full h-14 items-center flex flex-row justify-end ${layoutStyle}`}
      >
        <div className='sm:hidden md:hidden flex flex-row justify-around w-11/12'>
          <List href='newsBoard-ov-md'>NEWS</List>
          <List href='newVideoBoard'>新着動画</List>
          <List href='departBoard'>診療科一覧</List>
          <List href='aboutUniversity'>筑波大学附属病院について</List>
          <List href='studentVoices'>医学生の声</List>
          <List href='originalContents'>オリジナルコンテンツ</List>
          {/* <li className='list-none cursor-pointer'>
            <Link href={auth.odUser ? '/UserDashboard' : '/SignUpDashboard'}>
              <a className='text-white text-sm '>マイページ/新規登録 ▼</a>
            </Link>
          </li> */}
          <ListMyPage {...{ permissionChecker }} />
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`ov-lg:hidden h-20 w-20 p-6 flex flex-col items-stretch justify-around`}
        >
          <p className='bg-gray-600 w-full h-1 rounded'></p>
          <p className='bg-gray-600 w-full h-1 rounded'></p>
          <p className='bg-gray-600 w-full h-1 rounded'></p>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <MenuModal {...{ isMenuOpen, setIsMenuOpen, setIsMenuEventActive }} />
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${
              isMenuEventActive ? 'pointer-events-auto' : 'pointer-events-none'
            } fixed left-0 top-0 h-full w-full bg-opacity-10 backdrop-filter backdrop-blur z-30`}
          ></div>
        </>
      )}
      <AccountNotExistAlert />
      <NotAuthorizedAlert />
      <NotEmailVerifiedAlert />
    </>
  )
}

export default MenuBar

const List: VFC<{
  children: ReactNode
  href: string
  setIsMenuOpen?: any
}> = ({ children, href, setIsMenuOpen }) => {
  return (
    <li className='list-none cursor-pointer pointer-events-auto w-auto h-auto flex flex-col items-center justify-center'>
      <Scroll
        onClick={() => setIsMenuOpen(false)}
        to={href}
        smooth
        duration={400}
        className='text-white lg:text-xs ov-xl:text-sm'
      >
        {children}
        <span> ▼</span>
      </Scroll>
    </li>
  )
}

const MenuModal: VFC<{ setIsMenuEventActive?: any; setIsMenuOpen: any }> = ({
  setIsMenuEventActive,
  setIsMenuOpen,
}) => {
  const {
    auth,
    NotAuthorizedAlert,
    NotEmailVerifiedAlert,
    AccountNotExistAlert,
    permissionChecker,
  } = useRequiredPermission()
  return (
    <>
      <div className='fixed z-50 w-full h-full flex flex-col justify-evenly items-end pr-6'>
        <List {...{ setIsMenuOpen, href: 'newsBoard-sm' }}>NEWS</List>
        <List {...{ setIsMenuOpen, href: 'newVideoBoard' }}>新着動画</List>
        <List {...{ setIsMenuOpen, href: 'departBoard' }}>診療科一覧</List>
        <List {...{ setIsMenuOpen, href: 'aboutUniversity' }}>
          筑波大学附属病院について
        </List>
        <List {...{ setIsMenuOpen, href: 'studentVoices' }}>医学生の声</List>
        <List {...{ setIsMenuOpen, href: 'originalContents' }}>
          オリジナルコンテンツ
        </List>
        {/* <li className=' pointer-events-auto list-none cursor-pointer z-50'>
          <Link href={auth.odUser ? '/UserDashboard' : '/SignUpDashboard'}>
            <a className='text-white lg:text-xs ov-xl:text-sm '>
              マイページ/新規登録 ▼
            </a>
          </Link>
        </li> */}
        <ListMyPage {...{ setIsMenuEventActive, permissionChecker }} />
      </div>
      <AccountNotExistAlert {...{ setIsMenuEventActive }} />
      <NotEmailVerifiedAlert {...{ setIsMenuEventActive }} />
      <NotAuthorizedAlert {...{ setIsMenuEventActive }} />
    </>
  )
}

const ListMyPage: VFC<{ setIsMenuEventActive?: any; permissionChecker: any }> =
  ({ setIsMenuEventActive, permissionChecker }) => {
    const router = useRouter()
    return (
      <>
        <li
          onClick={() => {
            if (setIsMenuEventActive) setIsMenuEventActive(false)
            if (permissionChecker()) router.push('/UserDashboard')
          }}
          className='w-auto h-auto flex flex-col items-center justify-center text-center pointer-events-auto list-none cursor-pointer z-50 text-white lg:text-xs ov-xl:text-sm'
        >
          マイページ/ログイン▼
        </li>
      </>
    )
  }
