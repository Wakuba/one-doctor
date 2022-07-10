import { VFC } from 'react'
import AlertNakedModal from './AlertNakedModal'
// import { auth } from '../../lib/firebase/firebase.config'

const NotEmailVerifiedAlert: VFC = () => (
  <AlertNakedModal>
    <p>メールアドレスが承認されていません</p>
    <p>アカウント新規作成後に運営よりメールを送らせていただいておりますので</p>
    <p>
      そちらのURLよりメールアドレス認証をしていただき、本ページを更新してください
    </p>
  </AlertNakedModal>
)

export default NotEmailVerifiedAlert
