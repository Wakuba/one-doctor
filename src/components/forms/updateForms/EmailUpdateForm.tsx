import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import Input from '../formAtoms/Input'
import SubmitButton from '../formAtoms/SubmitButton'
import { VFC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectOdUser, selectOdUserExData } from '../../../features/userSlice'
import { openUIUModal } from '../../../features/modalsSlice'
import UserInfoUpdatedModal from '../../modals/UserInfoUpdatedModal'

const EmailUpdateForm: VFC = () => {
  const dispatch = useDispatch()
  const odUser = useSelector(selectOdUser)
  const uid = odUser ? odUser.uid : ''
  const odUserExData = useSelector(selectOdUserExData)
  const email = odUserExData.email

  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { email: string }) => {
    if (uid) {
      const emailDoc = doc(db, 'odUsers', uid)
      return updateDoc(emailDoc, { email: data.email }).then(() =>
        dispatch(openUIUModal())
      )
    } else {
      return console.log('uidが存在しません')
    }
  }
  return (
    <>
      <UserInfoUpdatedModal />
      <div>
        <div className='flex flex-row justify-start items-center mb-2'>
          <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
            メールアドレス
          </div>
          <button
            onClick={() => (email ? setEdit(!edit) : 'NO DATA')}
            className='bg-[#B7B7B7] px-2 text-white rounded-r'
          >
            編集
          </button>
        </div>
        {edit ? (
          <Form
            style='flex flex-row h-[64px]'
            formName='emailEditor'
            onSubmit={onSubmit}
          >
            <Input
              name='email'
              type='email'
              placeholder={email}
              style={{ wrapperStyle: 'block', inputStyle: 'block' }}
            />
            <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
              完了
            </SubmitButton>
          </Form>
        ) : (
          <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
            {email ? email : 'NO DATA'}
          </p>
        )}
      </div>
    </>
  )
}

export default EmailUpdateForm
