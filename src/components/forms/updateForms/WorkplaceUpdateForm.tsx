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

const WorkPlaceUpdateForm: VFC = () => {
  const dispatch = useDispatch()
  const odUser = useSelector(selectOdUser)
  const uid = odUser.uid
  const odUserExData = useSelector(selectOdUserExData)
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { workplace: string }) => {
    if (uid) {
      const workplaceDoc = doc(db, 'odUsers', uid)
      return updateDoc(workplaceDoc, { workplaceDoc: data.workplace }).then(
        () => dispatch(openUIUModal())
      )
    } else {
      return console.log('uidが存在しません')
    }
  }

  if ('workplace' in odUserExData) {
    const workplace = odUserExData.workplace
    return (
      <>
        <UserInfoUpdatedModal />
        <div>
          <div className='flex flex-row justify-start items-center mb-2'>
            <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
              現在のお勤め先
            </div>
            <button
              onClick={() => (workplace ? setEdit(!edit) : 'NO DATA')}
              className='bg-[#B7B7B7] px-2 text-white rounded-r'
            >
              編集
            </button>
          </div>
          {edit ? (
            <Form
              style='flex flex-row h-[64px]'
              formName='workplaceEditor'
              onSubmit={onSubmit}
            >
              <Input
                name='workplace'
                type='text'
                placeholder={workplace}
                style={{ wrapperStyle: 'block', inputStyle: 'block' }}
              />
              <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
                完了
              </SubmitButton>
            </Form>
          ) : (
            <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
              {workplace ? workplace : 'NO DATA'}
            </p>
          )}
        </div>
      </>
    )
  } else {
    return <div></div>
  }
}

export default WorkPlaceUpdateForm
