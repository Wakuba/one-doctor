import { odUserContextType } from '../types'
import { useAuth } from '../context'
// import { useRouter } from 'next/router'
import { useState, Dispatch, SetStateAction, ReactNode, VFC } from 'react'
import { ModalBackdrop, ModalMainArea } from '../../components/UIAtoms/Modal'
import PlaneButton from '../../components/UIAtoms/PlaneButton'
import { useRouter } from 'next/router'

const NotAuthorizedMessage = 'このアカウントは運営による認可を受けていません'

export const useRequiredPermission = (): {
  auth: odUserContextType
  NotEmailVerifiedAlert: VFC
  AccountNotExistAlert: VFC
  NotAuthorizedAlert: VFC
  permissionChecker: () => boolean
} => {
  const auth = useAuth()
  // const router = useRouter()
  const [openAccountNotExist, setOpenAccountNotExistModal] =
    useState<boolean>(false)
  const [openNotEmailVerifiedModal, setOpenNotEmailVerifiedModal] =
    useState<boolean>(false)
  const [openNotAuthorized, setOpenNotAuthorized] = useState<boolean | null>(
    null
  )

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
          setOpenNotAuthorized(false)
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

  const NotEmailVerifiedAlert: VFC = () => {
    return (
      <>
        {openNotEmailVerifiedModal && (
          <AlertComponent setState={setOpenNotEmailVerifiedModal}>
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

  const AccountNotExistAlert: VFC = () => {
    return (
      <>
        {openAccountNotExist && (
          <AlertComponent setState={setOpenAccountNotExistModal}>
            <p className='mb-4'>アカウントが作成されていません</p>
            <div className='mb-4 flex justify-around'>
              <PlaneButton href='/SignUpDashboard'>新規作成</PlaneButton>
              <PlaneButton color='gray' href='/LogIn'>
                ログイン
              </PlaneButton>
            </div>
          </AlertComponent>
        )}
        <div className='hidden'></div>
      </>
    )
  }

  const NotAuthorizedAlert: VFC = () => {
    return (
      <>
        {openNotAuthorized && (
          <AlertComponent setState={setOpenNotAuthorized}>
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
}: {
  children: ReactNode
}) => {
  const router = useRouter()
  return (
    <>
      <ModalMainArea
        closeModal={() => router.back()}
        modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
        modalContainerStyle='w-full space-y-4'
      >
        {children}
      </ModalMainArea>
      <ModalBackdrop closeModal={() => router.back()} />
    </>
  )
}
