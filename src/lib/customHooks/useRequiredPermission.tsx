import { odUserContextType } from '../types'
import { useAuth } from '../context'
// import { useRouter } from 'next/router'
import { useState, ReactNode, VFC } from 'react'
import { ModalBackdrop, ModalMainArea } from '../../components/UIAtoms/Modal'
import PlaneButton from '../../components/UIAtoms/PlaneButton'
import clsx from 'clsx'

const NotAuthorizedMessage = 'このアカウントは運営による認可を受けていません'

export const useRequiredPermission = (): {
  auth: odUserContextType
  NotEmailVerifiedAlert: VFC<{ setIsMenuEventActive?: any }>
  AccountNotExistAlert: VFC<{ setIsMenuEventActive?: any }>
  NotAuthorizedAlert: VFC<{ setIsMenuEventActive?: any }>
  permissionChecker: () => boolean
} => {
  const auth = useAuth()
  // const router = useRouter()
  const [openAccountNotExistModal, setOpenAccountNotExistModal] =
    useState<boolean>(false)
  const [openNotEmailVerifiedModal, setOpenNotEmailVerifiedModal] =
    useState<boolean>(false)
  const [openNotAuthorizedModal, setOpenNotAuthorizedModal] = useState<
    boolean | null
  >(null)

  const permissionChecker = () => {
    console.log('permissionCheckerが発火しました')
    if (!auth.odUser) {
      console.log('アカウントが作成されていません')
      // router.push('/SignUpDashboard')
      setOpenAccountNotExistModal(true)
      return false
    } else {
      if ('authorizedByAdmin' in auth.odUserData) {
        if (auth.odUserData.authorizedByAdmin === false) {
          console.log(NotAuthorizedMessage)
          setOpenNotAuthorizedModal(false)
        }
      }
      if (!auth.odUser.emailVerified) {
        console.log('メール認証がされていません')
        // router.push('/SignUpDashboard')
        setOpenNotEmailVerifiedModal(true)
        return false
      } else {
        return true
      }
    }
  }

  const NotEmailVerifiedAlert: VFC<{ setIsMenuEventActive?: any }> = ({
    setIsMenuEventActive,
  }) => {
    return (
      <>
        {openNotEmailVerifiedModal && (
          <AlertComponent
            setStateBack={() => {
              setOpenNotEmailVerifiedModal(false)
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

  const AccountNotExistAlert: VFC<{ setIsMenuEventActive?: any }> = ({
    setIsMenuEventActive,
  }) => {
    return (
      <>
        {openAccountNotExistModal && (
          <AlertComponent
            setStateBack={() => {
              setOpenAccountNotExistModal(false)
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

  const NotAuthorizedAlert: VFC<{ setIsMenuEventActive?: any }> = ({
    setIsMenuEventActive,
  }) => {
    return (
      <>
        {openNotAuthorizedModal && (
          <AlertComponent
            setStateBack={() => {
              setOpenNotAuthorizedModal(false)
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
