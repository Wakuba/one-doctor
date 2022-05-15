import { useRouter } from 'next/router'
import { ReactNode, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as Scroll } from 'react-scroll'
import {
  closeAllModal,
  openHeaderMenu,
  selectHeaderMenuState,
} from '../../features/modalsSlice'
import { selectOdUser, selectOdUserExData } from '../../features/userSlice'
import permissionChecker from '../../lib/customFunctions/permissionChecker'
import AccountNotExistAlert from '../modals/AccountNotExistAlert'
import NotAuthorizedAlert from '../modals/NotAuthorizedAlert'
import NotEmailVerifiedAlert from '../modals/NotEmailVerifiedAlert'

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
      <AccountNotExistAlert />
      <NotAuthorizedAlert />
      <NotEmailVerifiedAlert />
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
      <AccountNotExistAlert />
      <NotEmailVerifiedAlert />
      <NotAuthorizedAlert />
    </>
  )
}

const MyPageLink: VFC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const odUserExData = useSelector(selectOdUserExData)
  return (
    <>
      <li
        onClick={() => {
          if (permissionChecker(odUserExData, dispatch))
            router.push('/UserDashboard')
        }}
        className='w-auto h-auto flex flex-col items-center justify-center text-center text-stroke !pointer-events-auto list-none cursor-pointer z-50 text-white lg:text-xs ov-xl:text-sm'
      >
        マイページ/ログイン▼
      </li>
    </>
  )
}
