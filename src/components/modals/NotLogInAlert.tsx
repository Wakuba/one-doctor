import clsx from 'clsx'
import { VFC } from 'react'
import PlaneButton from '../UIAtoms/PlaneButton'
import AlertNakedModal from './AlertNakedModal'

const NotLogInAlert: VFC = () => (
  <AlertNakedModal>
    <p className='mb-4'>
      ログインされていないか,アカウントが作成されていません
    </p>
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
)

export default NotLogInAlert
