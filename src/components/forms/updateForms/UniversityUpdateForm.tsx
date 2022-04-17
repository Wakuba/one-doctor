import { doc, updateDoc } from 'firebase/firestore'
import { useAuthProvider } from '../../../lib/customHooks/useAuthProvider'
import { db } from '../../../lib/firebase/firebase.config'
import Form from '../Form'
import SubmitButton from '../formAtoms/SubmitButton'
import { VFC, useState } from 'react'
import SingleSelector from '../formAtoms/SingleSelector'

interface UniversityUpdateFormPropsType {
  data: string
}

const UniversityUpdateForm: VFC<UniversityUpdateFormPropsType> = ({ data }) => {
  const auth = useAuthProvider()
  const uid = auth.odUser?.uid
  const [edit, setEdit] = useState(false)
  const onSubmit = (data: { university: string }) => {
    if (uid) {
      const universityDoc = doc(db, 'odUsers', uid)
      return updateDoc(universityDoc, { university: data.university })
    } else {
      return console.log('uidが存在しません')
    }
  }
  return (
    <div>
      <div className='flex flex-row justify-start items-center mb-2'>
        <div className='bg-prime-blue-rich text-white px-2 rounded-l'>学年</div>
        <button
          onClick={() => (data ? setEdit(!edit) : 'NO DATA')}
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
              options: ['筑波大学', '順天堂大学', '自治医科大学', '長崎大学'],
              placeholder: data,
              isSearchable: false,
            }}
          />
          <SubmitButton style={{ buttonStyle: 'h-8 w-16 mt-[4px] ml-4' }}>
            完了
          </SubmitButton>
        </Form>
      ) : (
        <p className='breakAll pl-2 mb-[24px] h-[40px] py-2'>
          {data ? data : 'NO DATA'}
        </p>
      )}
    </div>
  )
}

export default UniversityUpdateForm
