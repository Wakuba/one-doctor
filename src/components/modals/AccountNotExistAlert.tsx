import clsx from 'clsx'
import { VFC } from 'react'
import { useSelector } from 'react-redux'
import { selectANEModal } from '../../features/modalsSlice'
import PlaneButton from '../UIAtoms/PlaneButton'
import AlertNakedModal from './AlertNakedModal'
// import { auth } from '../../lib/firebase/firebase.config'

const AccountNotExistAlert: VFC = () => {
  const openModal = useSelector(selectANEModal)

  return (
    <>
      {openModal && (
        <AlertNakedModal>
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
        </AlertNakedModal>
      )}
      {/* <div className='hidden'></div> */}
    </>
  )
}

export default AccountNotExistAlert
