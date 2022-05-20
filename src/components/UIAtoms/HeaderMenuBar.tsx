import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { ReactNode, useEffect, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as Scroll } from 'react-scroll'
import {
  closeAllModal,
  openHeaderMenu,
  selectHeaderMenuState,
} from '../../features/modalsSlice'
import {
  logInState,
  logOutState,
  selectOdUser,
  selectUserState,
} from '../../features/userSlice'
import { auth } from '../../lib/firebase/firebase.config'

const HeaderMenuBar: React.VFC<{ layoutStyle: string }> = ({ layoutStyle }) => {
  const dispatch = useDispatch()
  const headerMenuState = useSelector(selectHeaderMenuState)
  const { isMenuEventActive, isOpenMenuModal } = headerMenuState
  console.log(useSelector(selectOdUser))
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
          <MyPageLink />
        </div>
        <div
          onClick={() => {
            dispatch(openHeaderMenu())
          }}
          className={`ov-lg:hidden h-20 w-20 p-6 flex flex-col items-stretch justify-around`}
        >
          <p className='bg-gray-600 w-full h-1 rounded'></p>
          <p className='bg-gray-600 w-full h-1 rounded'></p>
          <p className='bg-gray-600 w-full h-1 rounded'></p>
        </div>
      </div>
      {isOpenMenuModal && (
        <>
          <MenuModal />
          <div
            id='menuModalBackDrop'
            onClick={() => dispatch(closeAllModal())}
            className={`${
              isMenuEventActive ? 'pointer-events-auto' : 'pointer-events-none'
            } cursor-pointer fixed left-0 top-0 h-full w-full bg-opacity-10 backdrop-filter backdrop-blur z-30`}
          ></div>
        </>
      )}
    </>
  )
}

export default HeaderMenuBar

const List: VFC<{
  children: ReactNode
  href: string
}> = ({ children, href }) => {
  const dispatch = useDispatch()
  return (
    <li className='list-none cursor-pointer pointer-events-auto w-auto h-auto flex flex-col items-center justify-center'>
      <Scroll
        onClick={() => {
          dispatch(closeAllModal())
        }}
        to={href}
        smooth
        duration={400}
        className='text-white lg:text-xs ov-xl:text-sm text-stroke'
      >
        {children}
        <span> ▼</span>
      </Scroll>
    </li>
  )
}

const MenuModal: VFC = () => {
  return (
    <>
      <div className='fixed z-50 w-full h-full flex flex-col justify-evenly items-end pr-6'>
        <List href='newsBoard-sm'>NEWS</List>
        <List href='newVideoBoard'>新着動画</List>
        <List href='departBoard'>診療科一覧</List>
        <List href='aboutUniversity'>筑波大学附属病院について</List>
        <List href='studentVoices'>医学生の声</List>
        <List href='originalContents'>オリジナルコンテンツ</List>
        <MyPageLink />
      </div>
    </>
  )
}

const MyPageLink: VFC = () => {
  const dispatch = useDispatch()
  const userState = useSelector(selectUserState)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ログイン中
        dispatch(logInState(user))
      } else {
        // ログアウト中
        dispatch(logOutState())
      }
    })
    return () => unsubscribe()
  })

  return userState === 'LogIn' ? (
    <Link href='/UserDashboard'>
      <a className='w-auto h-auto flex flex-col items-center justify-center text-center text-stroke !pointer-events-auto list-none cursor-pointer z-50 text-white lg:text-xs ov-xl:text-sm'>
        マイページ▼
      </a>
    </Link>
  ) : (
    <Link href='/LogIn'>
      <a className='w-auto h-auto flex flex-col items-center justify-center text-center text-stroke !pointer-events-auto list-none cursor-pointer z-50 text-white lg:text-xs ov-xl:text-sm'>
        ログイン▼
      </a>
    </Link>
  )
}
