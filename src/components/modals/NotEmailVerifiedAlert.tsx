import { VFC } from 'react'
import { useSelector } from 'react-redux'
import { selectNEVModal } from '../../features/modalsSlice'
import AlertNakedModal from './AlertNakedModal'
// import { auth } from '../../lib/firebase/firebase.config'

const NotEmailVerifiedAlert: VFC = () => {
  const openModal = useSelector(selectNEVModal)
  // const dispatch = useDispatch()

  return (
    <>
      {openModal && (
        <AlertNakedModal>
          <p>メールアドレスが承認されていません</p>
          <p>
            アカウント新規作成後に運営よりメールを送らせていただいておりますので
          </p>
          <p>
            そちらのURLよりメールアドレス認証をしていただき、本ページを更新してください
          </p>
        </AlertNakedModal>
      )}
      <div className='hidden'></div>
    </>
  )
}

export default NotEmailVerifiedAlert
