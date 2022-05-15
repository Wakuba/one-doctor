import { OdUserContextType } from '../types'
import { useAuth } from '../context'
// import { useRouter } from 'next/router'
import { useState, ReactNode, VFC } from 'react'
import { ModalBackdrop, ModalMainArea } from '../../components/UIAtoms/Modal'
import PlaneButton from '../../components/UIAtoms/PlaneButton'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { getAuth } from 'firebase/auth'

const NotAuthorizedMessage = 'このアカウントは運営による認可を受けていません'

export const useRequiredPermission = (): {
  auth: OdUserContextType
  NotEmailVerifiedAlert: VFC<{
    setIsMenuEventActive?: any
    backToTop?: boolean
  }>
  AccountNotExistAlert: VFC<{ setIsMenuEventActive?: any; backToTop?: boolean }>
  NotAuthorizedAlert: VFC<{ setIsMenuEventActive?: any; backToTop?: boolean }>
  permissionChecker: () => boolean
} => {
  const auth = useAuth()
  const router = useRouter()
  const [openAccountNotExistModal, setOpenAccountNotExistModal] =
    useState<boolean>(false)
  const [openNotEmailVerifiedModal, setOpenNotEmailVerifiedModal] =
    useState<boolean>(false)
  const [openNotAuthorizedModal, setOpenNotAuthorizedModal] = useState<
    boolean | null
  >(null)

  return { isPermitted, Loading }
    const authFb = getAuth()
    const user = authFb.currentUser
    if (user) {
      if ('authorizedByAdmin' in auth.odUserData) {
        if (auth.odUserData.authorizedByAdmin === false) {
          setOpenNotAuthorizedModal(false)
          return false
        }
      }
      if (!user.emailVerified) {
        // router.push('/SignUpDashboard')
        setOpenNotEmailVerifiedModal(true)
        return false
      } else {
        return true
      }
    } else {
      setOpenAccountNotExistModal(true)
      return false
    }
  }

  const NotEmailVerifiedAlert: VFC<{
    setIsMenuEventActive?: any
    backToTop?: boolean
  }> = ({ setIsMenuEventActive, backToTop = false }) => {
    return (
      <>
        {openNotEmailVerifiedModal && (
          <AlertComponent
            setStateBack={() => {
              if (backToTop) {
                router.push('/')
              } else {
                setOpenNotEmailVerifiedModal(false)
              }
              if (setIsMenuEventActive) setIsMenuEventActive(true)
            }}
          >
            <p>メールアドレスが承認されていません</p>
            <p>
              アカウント新規作成後に運営よりメールを送らせていただいておりますので
            </p>
            <p>
              そちらのURLよりメールアドレス認証をしていただき、本ページを更新してください
            </p>
          </AlertComponent>
        )}
        <div className='hidden'></div>
      </>
    )
  }

  const AccountNotExistAlert: VFC<{
    setIsMenuEventActive?: any
    backToTop?: boolean
  }> = ({ setIsMenuEventActive, backToTop = false }) => {
    return (
      <>
        {openAccountNotExistModal && (
          <AlertComponent
            setStateBack={() => {
              if (backToTop) {
                router.push('/')
              } else {
                setOpenAccountNotExistModal(false)
              }
              if (setIsMenuEventActive) setIsMenuEventActive(true)
            }}
          >
            <p className='mb-4'>アカウントが作成されていません</p>
            <div
              className={clsx(
                'mb-4 flex items-center justify-around',
                'sm:flex-col',
                'ov-md:flex-row'
              )}
            >
              <PlaneButton wrapperStyle='mb-4' href='/SignUpDashboard'>
                新規作成
              </PlaneButton>
              <PlaneButton color='gray' wrapperStyle='mb-4' href='/LogIn'>
                ログイン
              </PlaneButton>
            </div>
          </AlertComponent>
        )}
        {/* <div className='hidden'></div> */}
      </>
    )
  }

  const NotAuthorizedAlert: VFC<{
    setIsMenuEventActive?: any
    backToTop?: boolean
  }> = ({ setIsMenuEventActive, backToTop = false }) => {
    return (
      <>
        {openNotAuthorizedModal && (
          <AlertComponent
            setStateBack={() => {
              if (backToTop) {
                router.push('/')
              } else {
                setOpenNotAuthorizedModal(false)
              }
              if (setIsMenuEventActive) setIsMenuEventActive(true)
            }}
          >
            <p className='mb-4'>{NotAuthorizedMessage}が作成されていません</p>
            <div className='mb-4 flex justify-around'>
              <PlaneButton href='/SignUpDashboard'>新規作成</PlaneButton>
              <PlaneButton color='gray' href='/LogIn'>
                ログイン
              </PlaneButton>
            </div>
          </AlertComponent>
        )}
      </>
    )
  }

  return {
    auth,
    NotEmailVerifiedAlert,
    AccountNotExistAlert,
    NotAuthorizedAlert,
    permissionChecker,
  }
}

const AlertComponent = ({
  children,
  setStateBack,
}: {
  children: ReactNode
  setStateBack: any
}) => {
  return (
    <>
      <ModalMainArea
        modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
        modalContainerStyle='w-full space-y-4'
      >
        {children}
      </ModalMainArea>
      <ModalBackdrop closeModal={() => setStateBack()} />
    </>
  )
}
