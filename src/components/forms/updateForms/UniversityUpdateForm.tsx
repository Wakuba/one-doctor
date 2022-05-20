import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import SubmitButton from '../formAtoms/SubmitButton'
import { VFC, useState } from 'react'
import SingleSelector from '../formAtoms/SingleSelector'
import { useDispatch, useSelector } from 'react-redux'
import { selectOdUser, selectOdUserExData } from '../../../features/userSlice'
import { openUIUModal } from '../../../features/modalsSlice'
import UserInfoUpdatedModal from '../../modals/UserInfoUpdatedModal'

const UniversityUpdateForm: VFC = () => {
  const dispatch = useDispatch()
  const odUser = useSelector(selectOdUser)
  const uid = odUser ? odUser.uid : ''
  const odUserExData = useSelector(selectOdUserExData)
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { university: string }) => {
    if (uid) {
      const universityDoc = doc(db, 'odUsers', uid)
      return updateDoc(universityDoc, { university: data.university }).then(
        () => dispatch(openUIUModal())
      )
    } else {
      return console.log('uidが存在しません')
    }
  }
  if ('university' in odUserExData) {
    const university = odUserExData.university
    return (
      <>
        <UserInfoUpdatedModal />
        <div>
          <div className='flex flex-row justify-start items-center mb-2'>
            <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
              学年
            </div>
            <button
              onClick={() => (university ? setEdit(!edit) : 'NO DATA')}
              className='bg-[#B7B7B7] px-2 text-white rounded-r'
            >
              編集
            </button>
          </div>
          {edit ? (
            <Form
              style='flex flex-row h-[64px]'
              formName='universityEditor'
              onSubmit={onSubmit}
            >
              <SingleSelector
                {...{
                  name: 'university',
                  options: [
                    '筑波大学',
                    '順天堂大学',
                    '自治医科大学',
                    '長崎大学',
                  ],
                  placeholder: university,
                  isSearchable: false,
                }}
              />
              <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
                完了
              </SubmitButton>
            </Form>
          ) : (
            <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
              {university ? university : 'NO DATA'}
            </p>
          )}
        </div>
      </>
    )
  } else {
    return <div></div>
  }
}

export default UniversityUpdateForm
