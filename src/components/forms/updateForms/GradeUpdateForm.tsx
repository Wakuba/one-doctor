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

const GradeUpdateForm: VFC = () => {
  const dispatch = useDispatch()
  const odUser = useSelector(selectOdUser)
  const uid = odUser ? odUser.uid : ''
  const odUserExData = useSelector(selectOdUserExData)
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { grade: string }) => {
    if (uid) {
      const gradeDoc = doc(db, 'odUsers', uid)
      return updateDoc(gradeDoc, { grade: data.grade }).then(() =>
        dispatch(openUIUModal())
      )
    } else {
      return console.log('uidが存在しません')
    }
  }
  if ('grade' in odUserExData) {
    const grade = odUserExData.grade
    return (
      <>
        <UserInfoUpdatedModal />
        <div>
          <div className='flex flex-row justify-start items-center mb-2'>
            <div className='bg-prime-blue-rich text-white px-2 rounded-l'>
              学年
            </div>
            <button
              onClick={() => (grade ? setEdit(!edit) : 'NO DATA')}
              className='bg-[#B7B7B7] px-2 text-white rounded-r'
            >
              編集
            </button>
          </div>
          {edit ? (
            <Form
              style='flex flex-row h-[64px]'
              formName='gradeEditor'
              onSubmit={onSubmit}
            >
              <SingleSelector
                {...{
                  name: 'grade',
                  options: ['1', '2', '3', '4', '5', '6'],
                  placeholder: grade,
                  isSearchable: false,
                }}
              />
              <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
                完了
              </SubmitButton>
            </Form>
          ) : (
            <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
              {grade ? grade : 'NO DATA'}
            </p>
          )}
        </div>
      </>
    )
  } else {
    return <div></div>
  }
}

export default GradeUpdateForm
