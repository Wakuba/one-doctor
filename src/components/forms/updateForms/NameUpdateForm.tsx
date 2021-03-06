import { doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import InputDouble from '../formAtoms/InputDouble'
import SubmitButton from '../formAtoms/SubmitButton'
import { useDispatch, useSelector } from 'react-redux'
import { selectOdUser, selectOdUserExData } from '../../../features/userSlice'
import UserInfoUpdatedModal from '../../modals/UserInfoUpdatedModal'
import { openUIUModal } from '../../../features/modalsSlice'

const NameUpdateForm: React.VFC = () => {
  const dispatch = useDispatch()
  const odUserExData = useSelector(selectOdUserExData)
  const name = odUserExData.name
  const odUser = useSelector(selectOdUser)
  const splitName = name ? name.split(' ') : 'NO NAME'
  const familyName = Array.isArray(splitName) ? splitName[0] : ''
  const firstName = Array.isArray(splitName) ? splitName[1] : ''
  const uid = odUser ? odUser.uid : ''
  const onSubmit = (data: { familyName: string; firstName: string }) => {
    if (uid) {
      const nameDoc = doc(db, 'odUsers', uid)
      return updateDoc(nameDoc, {
        name: data.familyName + ' ' + data.firstName,
      }).then(() => dispatch(openUIUModal()))
    } else {
      return console.log('uidが存在しません')
    }
  }
  const [edit, setEdit] = useState(false)

  return (
    <>
      <UserInfoUpdatedModal />
      <div>
        <div className='flex flex-row justify-start items-center mb-2'>
          <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
            お名前
          </div>
          <button
            onClick={() => (name ? setEdit(!edit) : console.log('NO DATA'))}
            className='bg-[#B7B7B7] px-2 text-white rounded-r'
          >
            編集
          </button>
        </div>
        {edit ? (
          <Form
            style='flex flex-row h-[64px] w-full'
            formName='nameEditor'
            onSubmit={onSubmit}
          >
            <InputDouble
              {...{
                name: 'name',
                nameOne: 'familyName',
                nameTwo: 'firstName',
                type: 'text',
                placeholderOne: familyName ? familyName : '姓',
                placeholderTwo: firstName ? firstName : '名',
              }}
            />
            <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
              完了
            </SubmitButton>
          </Form>
        ) : (
          <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
            {name ? name : 'NO DATA'}
          </p>
        )}
      </div>
    </>
  )
}

export default NameUpdateForm
