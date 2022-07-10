import { VFC } from 'react'
import AlertNakedModal from './AlertNakedModal'

const NotAuthorizedMessage = `このアカウントはまだ運営による認可を受けていません。\n運営から認可を受けるまでお待ちください。
`

const NotAuthorizedAlert: VFC = () => (
  <AlertNakedModal>
    <p className=''>{NotAuthorizedMessage}</p>
    {/* <div className='mb-4 flex justify-around'>
            <PlaneButton href='/SignUpDashboard'>新規作成</PlaneButton>
            <PlaneButton color='gray' href='/LogIn'>
              ログイン
            </PlaneButton>
          </div> */}
  </AlertNakedModal>
)

export default NotAuthorizedAlert
